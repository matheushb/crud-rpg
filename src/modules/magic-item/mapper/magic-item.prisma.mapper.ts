import { MagicItem as PrismaMagicItem } from '@prisma/client';
import { MagicItemMapper } from './magic-item.mapper';
import { MagicItem } from '../entity/magic-item.entity';

export class MagicItemPrismaMapper implements MagicItemMapper<PrismaMagicItem> {
  mapToEntity(prismaItem: PrismaMagicItem): MagicItem {
    return new MagicItem({
      id: prismaItem.id,
      name: prismaItem.name,
      type: prismaItem.type,
      defense: prismaItem.defense,
      strength: prismaItem.strength,
      character_id: prismaItem.character_id,
      created_at: prismaItem.created_at,
      updated_at: prismaItem.updated_at,
    });
  }

  mapFromEntity(magicItem: MagicItem): PrismaMagicItem {
    return {
      id: magicItem.id,
      name: magicItem.name,
      type: magicItem.type,
      defense: magicItem.defense,
      strength: magicItem.strength,
      created_at: magicItem.created_at,
      updated_at: magicItem.updated_at,
      character_id: magicItem.character_id,
    };
  }
}
