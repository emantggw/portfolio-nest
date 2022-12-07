import { Model } from 'mongoose';
import { IRepository } from 'src/core/abstracts/irepository.abstract';

export class MongoRepository<T> implements IRepository<T> {
  constructor(private repo: Model<any>) {}
  findOne(id: any): Promise<T> {
    throw new Error('Method not implemented.');
  }
  find(): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  update(id: any, item: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete(id: any): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
