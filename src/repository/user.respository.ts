import { Client } from 'pg';

export class UserRepository {
  private Client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
}
