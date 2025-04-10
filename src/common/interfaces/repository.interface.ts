export interface Repository<E> {
  create(entity: E): Promise<E>;
  findOne(id: string): Promise<E>;
  findAll(): Promise<E[]>;
  update(entity: E): Promise<E>;
  delete(id: string): Promise<E>;
}
