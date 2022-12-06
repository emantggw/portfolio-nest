export abstract class IRepository<T> {
  abstract findOne(id: any): Promise<T>;
  abstract find(): Promise<T[]>;
  abstract update(id: any, item: T): Promise<T>;
  abstract delete(id: any): Promise<T>;
}
