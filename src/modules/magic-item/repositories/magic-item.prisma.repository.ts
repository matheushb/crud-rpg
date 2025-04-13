import { PrismaService } from '@/infra/prisma/prisma.service';
import { MagicItemRepository } from './magic-item.repository';
import { MagicItemPrismaMapper } from '../mapper/magic-item.prisma.mapper';
import { MagicItem } from '../entity/magic-item.entity';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FindAllMagicItemsParams } from '../dtos/find-all-magic-item.dto';

const MAGIC_ITEM_SELECT: Prisma.MagicItemSelect = {
  id: true,
  name: true,
  strength: true,
  defense: true,
  type: true,
  created_at: true,
  updated_at: true,
  character_id: true,
};

@Injectable()
export class MagicItemPrismaRepository implements MagicItemRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly magicItemMapper: MagicItemPrismaMapper,
  ) {}

  async create(magicItem: MagicItem) {
    const createdMagicItem = await this.prismaService.magicItem.create({
      data: this.magicItemMapper.mapFromEntity(magicItem),
      select: MAGIC_ITEM_SELECT,
    });

    return this.magicItemMapper.mapToEntity(createdMagicItem);
  }

  async findAll(params: FindAllMagicItemsParams) {
    const whereClause = this.getWhereClause(params);

    const magicItems = await this.prismaService.magicItem.findMany({
      where: whereClause,
      select: MAGIC_ITEM_SELECT,
    });

    return magicItems.map(this.magicItemMapper.mapToEntity);
  }

  async findOne(id: string) {
    const magicItem = await this.prismaService.magicItem.findUnique({
      where: { id },
      select: MAGIC_ITEM_SELECT,
    });

    if (!magicItem) return null;

    return this.magicItemMapper.mapToEntity(magicItem);
  }

  async update(magicItem: MagicItem) {
    const updatedMagicItem = await this.prismaService.magicItem.update({
      where: { id: magicItem.id },
      data: this.magicItemMapper.mapFromEntity(magicItem),
      select: MAGIC_ITEM_SELECT,
    });

    return this.magicItemMapper.mapToEntity(updatedMagicItem);
  }

  async delete(id: string) {
    const magicItem = await this.prismaService.magicItem.delete({
      where: { id },
      select: MAGIC_ITEM_SELECT,
    });

    if (!magicItem) return null;

    return this.magicItemMapper.mapToEntity(magicItem);
  }

  private getWhereClause(
    params: FindAllMagicItemsParams,
  ): Prisma.MagicItemWhereInput {
    return {
      ...(params.character_id && { character_id: params.character_id }),
      ...(params.type && { type: params.type }),
    };
  }
}
