import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/internship_db_typescript';
const client = postgres(connectionString);
export const db = drizzle(client);