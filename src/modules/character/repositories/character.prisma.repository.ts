import { PrismaService } from '@/infra/prisma/prisma.service';
import { CharacterRepository } from './character.repository.interface';
import { CharacterPrimaMapper } from '../mapper/character.prisma.mapper';
import { Character } from '../entity/character.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CharacterPrismaRepository implements CharacterRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly characterMapper: CharacterPrimaMapper,
  ) {}

  async create(character: Character) {
    const createdCharacter = await this.prismaService.character.create({
      data: this.characterMapper.mapFromEntity(character),
    });

    return this.characterMapper.mapToEntity(createdCharacter);
  }

  async findAll() {
    const characters = await this.prismaService.character.findMany();

    return characters.map(this.characterMapper.mapToEntity);
  }

  async findOne(id: string) {
    const character = await this.prismaService.character.findUnique({
      where: { id },
    });

    if (!character) return null;

    return this.characterMapper.mapToEntity(character);
  }

  async update(character: Character) {
    const updatedCharacter = await this.prismaService.character.update({
      where: { id: character.id },
      data: this.characterMapper.mapFromEntity(character),
    });

    return this.characterMapper.mapToEntity(updatedCharacter);
  }

  async delete(id: string) {
    const character = await this.prismaService.character.delete({
      where: { id },
    });

    if (!character) return null;

    return this.characterMapper.mapToEntity(character);
  }
}
