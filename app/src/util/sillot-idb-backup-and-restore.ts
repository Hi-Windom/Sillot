import * as path from "path";

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function exportToJson(idbDatabase: IDBRequest) {
  return new Promise((resolve, reject) => {
    var exportObject: any = {}
    if (idbDatabase.result.objectStoreNames.length === 0) {
      resolve(JSON.stringify(exportObject))
    } else {
      const transaction = idbDatabase.result.transaction(
        idbDatabase.result.objectStoreNames,
        'readonly'
      )

      transaction.addEventListener('error', reject)

      for (const storeName of idbDatabase.result.objectStoreNames) {
        const allObjects: any[] = []
        transaction
          .objectStore(storeName)
          .openCursor()
          .addEventListener('success', (event: { target: { result: any; }; }) => {
            const cursor = event.target.result
            if (cursor) {
              // Cursor holds value, put it into store data
              let dic: { [key: string]: any } = {};
              dic[cursor.key] = cursor.value
              allObjects.push(dic)
              cursor.continue()
            } else {
              // No more values, store is done
              exportObject[storeName] = allObjects

              // Last store was handled
              if (
                idbDatabase.result.objectStoreNames.length ===
                Object.keys(exportObject).length
              ) {
                resolve(JSON.stringify(exportObject))
              }
            }
          })
      }
    }
  })
}


export async function importFromJson(idbDatabase: IDBRequest, json: string) {
  return new Promise<void>((resolve, reject) => {

    var importObject = JSON.parse(json)
    for (const storeName of idbDatabase.result.objectStoreNames) {
      if (importObject[storeName].length > 0) {
        let transaction = idbDatabase.result.transaction(
          storeName,
          'readwrite'
        )
        // transaction.addEventListener('error', reject)
        transaction.onerror = function (event: any) {
          console.log('transaction error: ' + transaction.error);
        };
        let count = 0
        for (const toAdd of importObject[storeName]) {
          let value: any = Object.values(toAdd)[0];
          let key: any = Object.keys(toAdd)[0];
          if (!value || Object.keys(value).length == 0) {
            value = "";
          }
          const request = transaction.objectStore(storeName).add(value, key)
          request.addEventListener('success', () => {
            count++
            if (count === importObject[storeName].length) {
              // Added all objects for this store
              delete importObject[storeName]
              if (Object.keys(importObject).length === 0) {
                // Added all object stores
                resolve()
              }
            }
          })
        }
      }
    }
  })
}


export function clearDatabase(idbDatabase: { transaction: (arg0: any, arg1: string) => any; objectStoreNames: string | any[]; }) {
  return new Promise<void>((resolve, reject) => {
    const transaction = idbDatabase.transaction(
      idbDatabase.objectStoreNames,
      'readwrite'
    )
    transaction.addEventListener('error', reject)

    let count = 0
    for (const storeName of idbDatabase.objectStoreNames) {
      transaction
        .objectStore(storeName)
        .clear()
        .addEventListener('success', () => {
          count++
          if (count === idbDatabase.objectStoreNames.length) {
            // Cleared all object stores
            resolve()
          }
        })
    }
  })
}

export async function importIDB(result: any) {
  let importObject: any = result.data
  let dbList: Array<string> = Object.keys(importObject);
  for (var dbName in dbList) {

    let DBOpenRequest: IDBOpenDBRequest = window?.indexedDB?.open(dbName);
    DBOpenRequest.onupgradeneeded = function (event) {
      // 数据库创建或升级时触发
      let db = DBOpenRequest.result
      for (var key in importObject[dbName]) {
        if (!db.objectStoreNames.contains(key)) {
          db.createObjectStore(key);
        }
      }
    }
    DBOpenRequest.onsuccess = function (event) {
      // 第一次打开数据库时，会先触发upgradeneeded事件，然后触发success事件
      importFromJson(DBOpenRequest, JSON.stringify(importObject)).then((re) => { console.log('ok'); return (re); }).catch(console.error)
    }
    // 失败时触发
    DBOpenRequest.onerror = (event) => {
      console.log(event);
    };
  }
}

export async function exportIDB() {
  let dbList: Array<string> = (await window.indexedDB.databases()).map(db => db.name);
  return new Promise<Array<string>>(async (resolve, reject) => {
    resolve(dbList);
  }).then(async (resolve) => {
    let exData: any = {}
    resolve.forEach(dbName => {
      let DBOpenRequest = window.indexedDB.open(dbName);
      DBOpenRequest.onsuccess = (e) => {
        exportToJson(DBOpenRequest).then((response: string) => {
          exData[dbName] = JSON.parse(response);
        })
      }
      // 失败时触发
      DBOpenRequest.onerror = (event) => {
        console.log(event);
      };
    });
    while (true) {
      if (Object.keys(exData).length === dbList.length) { break; } else {
        await sleep(100);
      }
    }
    let workspaceName: string = path.basename(window.siyuan.config.system.workspaceDir)
    let formdata = new FormData();
    formdata.append("f", `IDB__${workspaceName}__.json`);
    formdata.append("data", JSON.stringify(exData));
    let url = "http://127.0.0.1:6806/api/sillot/setConfigesStore";
    fetch(url, {
      body: formdata,
      method: "POST",
    }).then(function (response) {
    });
  })
}