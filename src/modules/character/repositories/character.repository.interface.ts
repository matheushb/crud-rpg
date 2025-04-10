import { Repository } from '@/common/interfaces/repository.interface';
import { Character } from '../entity/character.entity';

export interface CharacterRepository extends Repository<Character> {}
