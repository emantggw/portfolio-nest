import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts/idataServices.abstract';
import { CreateUserDto } from 'src/core/dtos/user/user.dto';
import { UserFactoryService } from './userFactory.service';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: IDataServices,
    private userFactoryService: UserFactoryService,
  ) {}
  async createAccount(createAccount: CreateUserDto) {
    const user = await this.userFactoryService.createNewUser(createAccount);
    return this.dataServices.users.create(user);
  }
}
