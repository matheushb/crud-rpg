import { Mapper } from '@/common/interfaces/mapper.interface';
import { Character } from '../entity/character.entity';

export const CHARACTER_MAPPER = 'CHARACTER_MAPPER';

export interface CharacterMapper<E> extends Mapper<Character, E> {}
