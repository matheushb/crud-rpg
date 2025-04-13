import { PrismaService } from '@/infra/prisma/prisma.service';
import { CharacterRepository } from './character.repository.interface';
import { CharacterPrimaMapper } from '../mapper/character.prisma.mapper';
import { Character } from '../entity/character.entity';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FindAllCharacterParams } from '../dtos/find-all-character.dto';

const CHARACTER_SELECT: Prisma.CharacterSelect = {
  id: true,
  name: true,
  nickname: true,
  class: true,
  defense: true,
  strength: true,
  level: true,
  created_at: true,
  updated_at: true,
  magic_items: {
    select: {
      id: true,
      name: true,
      strength: true,
      defense: true,
      type: true,
      created_at: true,
      updated_at: true,
    },
  },
};

@Injectable()
export class CharacterPrismaRepository implements CharacterRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly characterMapper: CharacterPrimaMapper,
  ) {}

  async create(character: Character) {
    const createdCharacter = await this.prismaService.character.create({
      data: this.characterMapper.mapFromEntity(character),
      select: CHARACTER_SELECT,
    });

    return this.characterMapper.mapToEntity(createdCharacter);
  }

  async findAll(params: FindAllCharacterParams) {
    const whereClause = this.getWhereClause(params);

    const characters = await this.prismaService.character.findMany({
      select: CHARACTER_SELECT,
      where: whereClause,
    });

    return characters.map(this.characterMapper.mapToEntity);
  }

  async findOne(id: string) {
    const character = await this.prismaService.character.findUnique({
      where: { id },
      select: CHARACTER_SELECT,
    });

    if (!character) return null;

    return this.characterMapper.mapToEntity(character);
  }

  async update(character: Character) {
    const updatedCharacter = await this.prismaService.character.update({
      where: { id: character.id },
      data: this.characterMapper.mapFromEntity(character),
      select: CHARACTER_SELECT,
    });

    return this.characterMapper.mapToEntity(updatedCharacter);
  }

  async delete(id: string) {
    const character = await this.prismaService.character.delete({
      where: { id },
      select: CHARACTER_SELECT,
    });

    if (!character) return null;

    return this.characterMapper.mapToEntity(character);
  }

  private getWhereClause(
    params: FindAllCharacterParams,
  ): Prisma.CharacterWhereInput {
    return {
      ...(params.nickname && { nickname: { contains: params.nickname } }),
      ...(params.class && { class: { equals: params.class } }),
    };
  }
}
