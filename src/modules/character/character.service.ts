import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCharacterDto } from './dtos/create-character.dto';
import { FindAllCharacterParams } from './dtos/find-all-character.dto';
import { UpdateCharacterDto } from './dtos/update-character.dto';
import { Character } from './entity/character.entity';
import {
  CHARACTER_REPOSITORY,
  CharacterRepository,
} from './repositories/character.repository.interface';

@Injectable()
export class CharacterService {
  constructor(
    @Inject(CHARACTER_REPOSITORY)
    private readonly characterRepository: CharacterRepository,
  ) {}

  async create(body: CreateCharacterDto) {
    const character = new Character(body);

    return await this.characterRepository.create(character);
  }

  async findAll(params: FindAllCharacterParams) {
    return await this.characterRepository.findAll(params);
  }

  async findOne(id: string) {
    const character = await this.characterRepository.findOne(id);

    if (!character) {
      throw new NotFoundException('Character not found');
    }

    return character;
  }

  async update(id: string, body: UpdateCharacterDto) {
    const character = await this.characterRepository.findOne(id);

    const characterUpdateProps = new Character({
      id: id,
      name: body.name ?? character.name,
      class: character.class,
      defense: body.defense ?? character.defense,
      level: body.level ?? character.level,
      nickname: body.nickname ?? character.nickname,
      strength: body.strength ?? character.strength,
      created_at: character.created_at,
      updated_at: new Date(),
    });

    return await this.characterRepository.update(characterUpdateProps);
  }

  async delete(id: string) {
    const character = await this.characterRepository.delete(id);

    if (!character) {
      throw new NotFoundException('Character not found');
    }

    return character;
  }
}
