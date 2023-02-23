import * as path from "path";

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function exportToJson(idbDatabase: IDBRequest) {
  return new Promise((resolve, reject) => {
    const exportObject: any = {};
    if (idbDatabase.result.objectStoreNames.length === 0) {
      resolve(JSON.stringify(exportObject));
    } else {
      const snList: Array<string> = Object.values(idbDatabase.result.objectStoreNames);
      snList.forEach((storeName: any) => {
        const allObjects: any[] = [];
        const transaction = idbDatabase.result.transaction(
          storeName,
          "readonly"
        );

        transaction.addEventListener("error", reject);
        transaction
          .objectStore(storeName)
          .openCursor()
          .addEventListener("success", (event: { target: { result: any; }; }) => {
            const cursor = event.target.result;
            if (cursor) {
              // Cursor holds value, put it into store data
              const dic: { [key: string]: any } = {};
              dic[cursor.key] = cursor.value;
              allObjects.push(dic);
              cursor.continue();
            } else {
              // No more values, store is done
              exportObject[storeName] = allObjects;

              // Last store was handled
              if (
                idbDatabase.result.objectStoreNames.length ===
                Object.keys(exportObject).length
              ) {
                resolve(JSON.stringify(exportObject));
              }
            }
          });
      });
    }
  });
}


function importFromJson(idbDatabase: IDBRequest, importObject: any) {
  return new Promise<void>((resolve, reject) => {
    const snList: Array<string> = Object.values(idbDatabase.result.objectStoreNames);
    snList.forEach((storeName: any) => {
      if (importObject[storeName].length > 0) {
        const transaction = idbDatabase.result.transaction(
          storeName,
          "readwrite"
        );
        // transaction.addEventListener('error', reject)
        transaction.onerror = function (event: any) {
          window.sout.error("transaction error: " + transaction.error);
          reject();
        };
        let count = 0;
        importObject[storeName].forEach((toAdd: any) => {
          let value: any = Object.values(toAdd)[0];
          const key: any = Object.keys(toAdd)[0];
          if (!value || Object.keys(value).length === 0) {
            value = "";
          }
          const request = transaction.objectStore(storeName);
          const req = request.openCursor(key);
          req.onsuccess = function (e: any) {
            const cursor = e.target.result;
            if (cursor) { // key already exist
              // cursor.update(value);
              // 重载时不覆写IndexedDB #60
            } else { // key not exist
              request.add(value, key);
            }
            count++;
            if (count === importObject[storeName].length) {
              // Added all objects for this store
              delete importObject[storeName];
              if (Object.keys(importObject).length === 0) {
                // Added all object stores
                resolve();
              }
            }
          };
        });
      } else {
        delete importObject[storeName];
      }
    });
  });
}

function clearDatabase(idbDatabase: { transaction: (arg0: any, arg1: string) => any; objectStoreNames: any[]; }) {
  return new Promise<void>((resolve, reject) => {
    const transaction = idbDatabase.transaction(
      idbDatabase.objectStoreNames,
      "readwrite"
    );
    transaction.addEventListener("error", reject);

    let count = 0;
    idbDatabase.objectStoreNames.forEach((storeName: any) => {
      transaction
        .objectStore(storeName)
        .clear()
        .addEventListener("success", () => {
          count++;
          if (count === idbDatabase.objectStoreNames.length) {
            // Cleared all object stores
            resolve();
          }
        });
    });
  });
}

export async function importIDB(result: any) {
  if (window.Sillot.status.IDBloaded && !window.location.search.startsWith("?b=Sillot")) { return; }
  const importObject: any = result.data;
  const dbList: Array<string> = Object.keys(importObject);
  let resolved = 0;
  let waittime = 0.0;
  return new Promise<number>(async (resolve, reject) => {
    dbList.forEach(dbName => {
      if (Object.keys(importObject[dbName]).length === 0) {
        resolved += 1;
      } else {
        const DBOpenRequest: IDBOpenDBRequest = window.indexedDB.open(dbName);
        DBOpenRequest.onupgradeneeded = function (event) {
          // 数据库创建或升级时触发
          const db = DBOpenRequest.result;
          const kList: Array<string> = Object.keys(importObject[dbName]);
          kList.forEach((key: any) => {
            if (!db.objectStoreNames.contains(key)) {
              db.createObjectStore(key);
              window.sout.warn(key);
            }
          });
        };
        DBOpenRequest.onsuccess = function (event) {
          // 第一次打开数据库时，会先触发upgradeneeded事件，然后触发success事件
          importFromJson(DBOpenRequest, importObject[dbName]).then(() => { resolved += 1; }).catch((e) => {
            window.sout.error(e);
            resolved += 1;
          });
        };
        // 失败时触发
        DBOpenRequest.onerror = (event) => {
          window.sout.error(event);
          reject(event);
        };
      }
    });
    while (true) {
      if (resolved === dbList.length || waittime > 10.0) { break; } else {
        await sleep(100);
        waittime += 0.1;
      }
    }
    resolve(resolved);
  });
}

export async function exportIDB() {
  if (window.location.search.startsWith("?b=Sillot")) { return; }
  const dbList: Array<string> = (await window.indexedDB.databases()).map(db => db.name);
  return new Promise<Array<string>>(async (resolve, reject) => {
    resolve(dbList);
  }).then(async (resolve) => {
    const exData: any = {};
    resolve.forEach(dbName => {
      const DBOpenRequest = window.indexedDB.open(dbName);
      DBOpenRequest.onsuccess = (e) => {
        exportToJson(DBOpenRequest).then((response: string) => {
          exData[dbName] = JSON.parse(response);
        });
      };
      // 失败时触发
      DBOpenRequest.onerror = (event) => {
        window.sout.error(event);
      };
    });
    while (true) {
      if (Object.keys(exData).length === dbList.length) { break; } else {
        await sleep(100);
      }
    }
    const workspaceName: string = path.basename(window.siyuan.config.system.workspaceDir);
    const formdata = new FormData();
    formdata.append("f", `IDB__${workspaceName}__.json`);
    formdata.append("data", JSON.stringify(exData));
    const url = "http://127.0.0.1:58131/api/sillot/setConfigesStore";
    fetch(url, {
      body: formdata,
      method: "POST",
    }).then(function (response) {
    });
  });
}