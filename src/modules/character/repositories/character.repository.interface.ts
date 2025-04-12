import { Repository } from '@/common/interfaces/repository.interface';
import { Character } from '../entity/character.entity';

export const CHARACTER_REPOSITORY = 'CHARACTER_REPOSITORY';

export interface CharacterRepository extends Repository<Character> {}
