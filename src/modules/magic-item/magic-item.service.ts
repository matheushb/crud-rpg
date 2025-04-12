import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMagicItemDto } from './dtos/create-magic-item.dto';
import {
  MAGIC_ITEM_REPOSITORY,
  MagicItemRepository,
} from './repositories/magic-item.repository';
import { UpdateMagicItemDto } from './dtos/update-magic-item.dto';
import { MagicItem } from './entity/magic-item.entity';

@Injectable()
export class MagicItemService {
  constructor(
    @Inject(MAGIC_ITEM_REPOSITORY)
    private readonly magicItemRepository: MagicItemRepository,
  ) {}

  async create(body: CreateMagicItemDto) {
    const magicItem = new MagicItem(body);

    return await this.magicItemRepository.create(magicItem);
  }

  async findAll() {
    return this.magicItemRepository.findAll();
  }

  async findOne(id: string) {
    const magicItem = await this.magicItemRepository.findOne(id);

    if (!magicItem) {
      throw new NotFoundException('MagicItem not found');
    }

    return magicItem;
  }

  async update(id: string, body: UpdateMagicItemDto) {
    const magicItem = await this.magicItemRepository.findOne(id);

    const magicItemUpdateProps = new MagicItem({
      id: id,
      name: body.name ?? magicItem.name,
      defense: body.defense ?? magicItem.defense,
      strength: body.strength ?? magicItem.strength,
      type: body.type ?? magicItem.type,
      character_id: body.character_id ?? magicItem.character_id,
      created_at: magicItem.created_at,
      updated_at: new Date(),
    });

    return await this.magicItemRepository.update(magicItemUpdateProps);
  }

  async delete(id: string) {
    const magicItem = await this.magicItemRepository.delete(id);

    if (!magicItem) {
      throw new NotFoundException('MagicItem not found');
    }

    return magicItem;
  }
}
