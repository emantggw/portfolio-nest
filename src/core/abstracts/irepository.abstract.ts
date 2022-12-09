export abstract class IRepository<T> {
  abstract create(item: T): Promise<T>;
  abstract findOne(id: any): Promise<T>;
  abstract find(filter: any): Promise<T[]>;
  abstract update(id: any, item: any): Promise<T>;
  abstract delete(id: any): Promise<T>;
}
