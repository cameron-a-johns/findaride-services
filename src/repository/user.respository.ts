import { Pool } from 'pg';
import { UserAdd, DbResult } from '../models';

const local =
  'postgres://odiqvfcervvrbx:b0c6f75cb6cd281e7c6e341c20b6a669b58e878db1393b3118a923beb248219f@ec2-54-221-238-248.compute-1.amazonaws.com:5432/d9vpt5ouqt4nf5';

export class UserRepository {
  private Client = new Pool({
    connectionString: process.env.DATABASE_URL || local,
    ssl: true,
  });

  async getTime() {
    await this.Client.query(
      `SELECT
    COLUMN_NAME
 FROM
    information_schema.COLUMNS
 WHERE
    TABLE_NAME = 'users'`,
    )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  async addUser(user: UserAdd) {
    const userExists = (await this.Client.query(`SELECT * from users WHERE provider_id = '${user.id}'`)).rowCount;
    if (userExists > 0) {
      return { isErr: true, msg: 'User already signed up' };
    }

    await this.Client.query(`INSERT INTO public.users (provider_id, join_date) VALUES ('${user.id}', NOW())`)
      .then(() => {
        return { isErr: false, msg: 'User successfully created' };
      })
      .catch(err => {
        return { isErr: true, msg: `${err}` };
      });

    return { isErr: true, msg: 'Unknown err' };
  }
}
