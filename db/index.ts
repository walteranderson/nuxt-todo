import { drizzle, type BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
// import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from 'better-sqlite3';

export * from './schema';

export const sqlite = new Database('sqlite.db');
export const db: BetterSQLite3Database = drizzle(sqlite);

// migrate(db, { migrationsFolder: 'db/migrations' });
