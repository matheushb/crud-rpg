import { Character as PrismaCharacter } from '@prisma/client';
import { Character } from '../entity/character.entity';
import { CharacterMapper } from './character.mapper';

export class CharacterPrimaMapper implements CharacterMapper<PrismaCharacter> {
  mapToEntity(prismaCharacter: PrismaCharacter): Character {
    return {
      id: prismaCharacter.id,
      name: prismaCharacter.name,
      class: prismaCharacter.class,
      defense: prismaCharacter.defense,
      level: prismaCharacter.level,
      nickname: prismaCharacter.nickname,
      strength: prismaCharacter.strength,
      created_at: prismaCharacter.created_at,
      updated_at: prismaCharacter.updated_at,
    };
  }

  mapFromEntity(character: Character): PrismaCharacter {
    return {
      id: character.id,
      name: character.name,
      class: character.class,
      defense: character.defense,
      level: character.level,
      nickname: character.nickname,
      strength: character.strength,
      created_at: character.created_at,
      updated_at: character.updated_at,
    };
  }
}
