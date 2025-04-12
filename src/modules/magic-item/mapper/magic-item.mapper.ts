import { Mapper } from '@/common/interfaces/mapper.interface';
import { MagicItem } from '../entity/magic-item.entity';

export const MAGIC_ITEM_MAPPER = 'MAGIC_ITEM_MAPPER';

export interface MagicItemMapper<E> extends Mapper<MagicItem, E> {}
