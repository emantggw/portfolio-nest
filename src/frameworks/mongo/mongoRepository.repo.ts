import { Model } from 'mongoose';
import { IRepository } from 'src/core/abstracts/irepository.abstract';
import { ObjectId } from 'bson';
import { UnauthorizedException } from '@nestjs/common';

export class MongoRepository<T> implements IRepository<T> {
  constructor(private repo: Model<any>) {}
  create(item: T): Promise<T> {
    return this.repo.create(item);
  }
  findOne(id: any): Promise<T> {
    if (!ObjectId.isValid(id)) {
      return null;
    }
    return this.repo.findById(id).exec();
  }
  find(filter: any = {}): Promise<T[]> {
    return this.repo.find().where(filter).exec();
  }
  update(id: any, item: T): Promise<T> {
    return this.repo.findByIdAndUpdate(id, item).exec();
  }
  delete(id: any): Promise<T> {
    return this.repo.findByIdAndDelete(id).exec();
  }
}
