import { PrismaService } from '@/infra/prisma/prisma.service';
import { MagicItemRepository } from './magic-item.repository';
import { MagicItemPrismaMapper } from '../mapper/magic-item.prisma.mapper';
import { MagicItem } from '../entity/magic-item.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MagicItemPrismaRepository implements MagicItemRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly magicItemMapper: MagicItemPrismaMapper,
  ) {}

  async create(magicItem: MagicItem) {
    const createdMagicItem = await this.prismaService.magicItem.create({
      data: this.magicItemMapper.mapFromEntity(magicItem),
    });

    return this.magicItemMapper.mapToEntity(createdMagicItem);
  }

  async findAll() {
    const magicItems = await this.prismaService.magicItem.findMany();

    return magicItems.map(this.magicItemMapper.mapToEntity);
  }

  async findOne(id: string) {
    const magicItem = await this.prismaService.magicItem.findUnique({
      where: { id },
    });

    if (!magicItem) return null;

    return this.magicItemMapper.mapToEntity(magicItem);
  }

  async update(magicItem: MagicItem) {
    const updatedMagicItem = await this.prismaService.magicItem.update({
      where: { id: magicItem.id },
      data: this.magicItemMapper.mapFromEntity(magicItem),
    });

    return this.magicItemMapper.mapToEntity(updatedMagicItem);
  }

  async delete(id: string) {
    const magicItem = await this.prismaService.magicItem.delete({
      where: { id },
    });

    if (!magicItem) return null;

    return this.magicItemMapper.mapToEntity(magicItem);
  }
}
