import { User } from '../entities/user/user.entity';
import { IRepository } from './irepository.abstract';

export abstract class IDataServices {
  abstract users: IRepository<User>;
}
