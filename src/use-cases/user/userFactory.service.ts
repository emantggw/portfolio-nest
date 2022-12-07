import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/core/dtos/user/user.dto';
import { User } from 'src/core/entities/user/user.entity';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto): User {
    const newUser = new User();
    newUser.email = createUserDto.email;
    newUser.password = createUserDto.password;
    return newUser;
  }
}
