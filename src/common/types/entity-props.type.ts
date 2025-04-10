import { ObjectValues } from './object-values.type';

export type EntityProps<T> = Omit<
  ObjectValues<T>,
  'id' | 'created_at' | 'updated_at'
> & {
  id?: string;
  created_at?: Date;
  updated_at?: Date;
};
