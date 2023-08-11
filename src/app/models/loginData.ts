export interface LoginData {
  ATO: string;
  ATO_exp: Date;
  RTO: string;
  RTO_exp: Date;
  user: User;
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}
