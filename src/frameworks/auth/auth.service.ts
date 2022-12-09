import { Injectable } from '@nestjs/common';
import { IAuthServices } from 'src/core/abstracts/iauthServices.abstract';
import { IDataServices } from 'src/core/abstracts/idataServices.abstract';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService implements IAuthServices {
  constructor(private dataServices: IDataServices) {}
  async validate(username: string, password: string): Promise<any> {
    const users = await this.dataServices.users.find({ email: username });

    if (users.length == 1) {
      const isMatch = await bcrypt.compare(password, users[0].password);
      if (isMatch) {
        return users[0];
      }
    }
    return null;
  }
}
