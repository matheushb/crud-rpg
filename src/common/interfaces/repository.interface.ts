export interface Repository<E> {
  create(entity: E): Promise<E>;
  findOne(id: string): Promise<E>;
  findAll(params?: object): Promise<E[]>;
  update(entity: E): Promise<E>;
  delete(id: string): Promise<E>;
}
