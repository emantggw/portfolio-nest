import { Injectable } from '@nestjs/common';
import { IAuthServices } from 'src/core/abstracts/iauthServices.abstract';
import { IDataServices } from 'src/core/abstracts/idataServices.abstract';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/core/entities/user/user.entity';

@Injectable()
export class AuthService implements IAuthServices {
  constructor(
    private dataServices: IDataServices,
    private jwtService: JwtService,
  ) {}
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

  async login(userId: string) {
    const payload = { userId: userId };
    return {
      access_token: this.jwtService.sign(payload),
      user: await this.dataServices.users.findOne(userId),
    };
  }
}
