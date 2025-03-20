import * as bcrypt from 'bcryptjs';

export default class BcryptImplement {
  saltRounds: number;
  constructor() {
    this.saltRounds = 10;
  }

  hash(string: string) {
    const salt = bcrypt.genSaltSync(this.saltRounds);
    const stringHashed = bcrypt.hashSync(string, salt);
    return stringHashed;
  }

  compare(string: string, stringHashed: string) {
    const verify = bcrypt.compareSync(string, stringHashed);
    return verify;
  }
}
