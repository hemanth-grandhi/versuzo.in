declare module "../utils/db.js" {
  export const query: {
    run: (sql: string, params?: any[]) => Promise<{ lastID: any; changes: number }>;
    get: <T = any>(sql: string, params?: any[]) => Promise<T | undefined>;
    all: <T = any>(sql: string, params?: any[]) => Promise<T[]>;
  };
}
