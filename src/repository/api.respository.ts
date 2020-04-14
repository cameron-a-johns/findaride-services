import { Pool } from 'pg';

const local =
  'postgres://odiqvfcervvrbx:b0c6f75cb6cd281e7c6e341c20b6a669b58e878db1393b3118a923beb248219f@ec2-54-221-238-248.compute-1.amazonaws.com:5432/d9vpt5ouqt4nf5';

export class ApiRepository {
  private Client = new Pool({
    connectionString: process.env.DATABASE_URL || local,
    ssl: true,
  });

  async checkApiKey(key: string) {
    await this.Client.query(`select exists(select 1 from apiKeys where apiKey=${key})`)
      .then(res => {
        console.log(`apikey result: ${res}`);
        return true; // TODO: remove hard code
      })
      .catch(err => {
        console.log(`apikey error: ${err}`);
        return true;
      });
  }
}
