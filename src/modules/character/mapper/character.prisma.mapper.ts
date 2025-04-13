import { Character as PrismaCharacter } from '@prisma/client';
import { Character } from '../entity/character.entity';
import { CharacterMapper } from './character.mapper';
import { MagicItem } from '@/modules/magic-item/entity/magic-item.entity';

export class CharacterPrimaMapper implements CharacterMapper<PrismaCharacter> {
  mapToEntity(
    prismaCharacter: PrismaCharacter & { magic_items?: MagicItem[] },
  ): Character {
    return new Character({
      id: prismaCharacter.id,
      name: prismaCharacter.name,
      nickname: prismaCharacter.nickname,
      class: prismaCharacter.class,
      strength: prismaCharacter.strength,
      defense: prismaCharacter.defense,
      level: prismaCharacter.level,
      created_at: prismaCharacter.created_at,
      updated_at: prismaCharacter.updated_at,
      magic_items: prismaCharacter.magic_items,
    });
  }

  mapFromEntity(character: Character): PrismaCharacter {
    return {
      id: character.id,
      name: character.name,
      nickname: character.nickname,
      class: character.class,
      strength: character.strength,
      defense: character.defense,
      level: character.level,
      created_at: character.created_at,
      updated_at: character.updated_at,
    };
  }
}
