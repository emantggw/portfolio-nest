import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/core/dtos/user/user.dto';
import { User } from 'src/core/entities/user/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserFactoryService {
  async createNewUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new User();
    newUser.email = createUserDto.email;
    const saltOrRounds = 10;
    const password = createUserDto.password;
    const hash = await bcrypt.hash(password, saltOrRounds);
    newUser.password = hash;
    return newUser;
  }
}
