export type UserType = 'admin' | 'rider' | 'organiser';

export interface User {
  id: number;
  username: string;
  password: string;
  lastLogin: Date;
  created: Date;
}
