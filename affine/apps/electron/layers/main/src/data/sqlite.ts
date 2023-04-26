import path from 'node:path';

import type { Database } from 'better-sqlite3';
import sqlite from 'better-sqlite3';
import fs from 'fs-extra';
import * as Y from 'yjs';

import { logger } from '../../../logger';
import type { AppContext } from '../context';

const schemas = [
  `CREATE TABLE IF NOT EXISTS "updates" (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  data BLOB NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
)`,
  `CREATE TABLE IF NOT EXISTS "blobs" (
  key TEXT PRIMARY KEY NOT NULL,
  data BLOB NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
)`,
];

interface UpdateRow {
  id: number;
  data: Buffer;
  timestamp: string;
}

interface BlobRow {
  key: string;
  data: Buffer;
  timestamp: string;
}

export class WorkspaceDatabase {
  sqliteDB: Database;
  ydoc = new Y.Doc();
  firstConnect = false;

  constructor(public path: string) {
    this.sqliteDB = this.reconnectDB();
  }

  // release resources
  destroy = () => {
    this.sqliteDB?.close();
    this.ydoc.destroy();
  };

  reconnectDB = () => {
    logger.log('open db', this.path);
    if (this.sqliteDB) {
      this.sqliteDB.close();
    }

    // use cached version?
    const db = (this.sqliteDB = sqlite(this.path));
    db.exec(schemas.join(';'));

    if (!this.firstConnect) {
      this.ydoc.on('update', this.addUpdateToSQLite);
    }

    const updates = this.getUpdates();
    updates.forEach(update => {
      Y.applyUpdate(this.ydoc, update.data);
    });

    this.firstConnect = true;

    return db;
  };

  getEncodedDocUpdates = () => {
    return Y.encodeStateAsUpdate(this.ydoc);
  };

  // non-blocking and use yDoc to validate the update
  // after that, the update is added to the db
  applyUpdate = (data: Uint8Array) => {
    Y.applyUpdate(this.ydoc, data);
    // todo: trim the updates when the number of records is too large
    // 1. store the current ydoc state in the db
    // 2. then delete the old updates
    // yjs-idb will always trim the db for the first time after DB is loaded
  };

  addBlob = (key: string, data: Uint8Array) => {
    try {
      const statement = this.sqliteDB.prepare(
        'INSERT INTO blobs (key, data) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET data = ?'
      );
      statement.run(key, data, data);
    } catch (error) {
      logger.error('addBlob', error);
    }
  };

  getBlob = (key: string) => {
    try {
      const statement = this.sqliteDB.prepare(
        'SELECT data FROM blobs WHERE key = ?'
      );
      const row = statement.get(key) as BlobRow;
      if (!row) {
        return null;
      }
      return row.data;
    } catch (error) {
      logger.error('getBlob', error);
      return null;
    }
  };

  deleteBlob = (key: string) => {
    try {
      const statement = this.sqliteDB.prepare(
        'DELETE FROM blobs WHERE key = ?'
      );
      statement.run(key);
    } catch (error) {
      logger.error('deleteBlob', error);
    }
  };

  getPersistentBlobKeys = () => {
    try {
      const statement = this.sqliteDB.prepare('SELECT key FROM blobs');
      const rows = statement.all() as BlobRow[];
      return rows.map(row => row.key);
    } catch (error) {
      logger.error('getPersistentBlobKeys', error);
      return [];
    }
  };

  private getUpdates = () => {
    try {
      const statement = this.sqliteDB.prepare('SELECT * FROM updates');
      const rows = statement.all() as UpdateRow[];
      return rows;
    } catch (error) {
      logger.error('getUpdates', error);
      return [];
    }
  };

  // batch write instead write per key stroke?
  private addUpdateToSQLite = (data: Uint8Array) => {
    try {
      const start = performance.now();
      const statement = this.sqliteDB.prepare(
        'INSERT INTO updates (data) VALUES (?)'
      );
      statement.run(data);
      logger.debug('addUpdateToSQLite', performance.now() - start, 'ms');
    } catch (error) {
      logger.error('addUpdateToSQLite', error);
    }
  };
}

export async function openWorkspaceDatabase(
  context: AppContext,
  workspaceId: string
) {
  const basePath = path.join(context.appDataPath, 'workspaces', workspaceId);
  // hmmm.... blocking api but it should be fine, right?
  await fs.ensureDir(basePath);
  const dbPath = path.join(basePath, 'storage.db');

  return new WorkspaceDatabase(dbPath);
}
