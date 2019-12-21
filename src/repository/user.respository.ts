import { Client } from 'pg';

const local =
  'postgres://odiqvfcervvrbx:b0c6f75cb6cd281e7c6e341c20b6a669b58e878db1393b3118a923beb248219f@ec2-54-221-238-248.compute-1.amazonaws.com:5432/d9vpt5ouqt4nf5';

export class UserRepository {
  private Client = new Client({
    connectionString: process.env.DATABASE_URL || local,
    ssl: true,
  });

  async getTime() {
    const result = await this.Client.query('SELECT NOW() as now');
    return result.rows[0];
  }
}
