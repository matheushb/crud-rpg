import { Repository } from '@/common/interfaces/repository.interface';
import { MagicItem } from '../entity/magic-item.entity';

export const MAGIC_ITEM_REPOSITORY = 'MAGIC_ITEM_REPOSITORY';

export interface MagicItemRepository extends Repository<MagicItem> {}
