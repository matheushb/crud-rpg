import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMagicItemDto } from './dtos/create-magic-item.dto';
import { FindAllMagicItemsParams } from './dtos/find-all-magic-item.dto';
import { UpdateMagicItemDto } from './dtos/update-magic-item.dto';
import { MagicItem } from './entity/magic-item.entity';
import {
  MAGIC_ITEM_REPOSITORY,
  MagicItemRepository,
} from './repositories/magic-item.repository';
import { CharacterService } from '../character/character.service';
import { MagicItemType } from './enums/magic-item-type.enum';

@Injectable()
export class MagicItemService {
  constructor(
    @Inject(MAGIC_ITEM_REPOSITORY)
    private readonly magicItemRepository: MagicItemRepository,
    private readonly characterService: CharacterService,
  ) {}

  async create(body: CreateMagicItemDto) {
    if (body.type === MagicItemType.AMULET && body.character_id) {
      await this.characterHasAmulet(body.character_id);
    }

    const magicItem = new MagicItem(body);

    return await this.magicItemRepository.create(magicItem);
  }

  async findAll(params: FindAllMagicItemsParams) {
    return this.magicItemRepository.findAll(params);
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

    if (magicItem.type === MagicItemType.AMULET && body.character_id) {
      await this.characterHasAmulet(body.character_id);
    }

    const magicItemUpdateProps = new MagicItem({
      id: id,
      name: body.name ?? magicItem.name,
      defense: body.defense ?? magicItem.defense,
      strength: body.strength ?? magicItem.strength,
      type: magicItem.type,
      character_id:
        body.character_id === undefined
          ? magicItem.character_id
          : body.character_id,
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

  private async characterHasAmulet(characterId: string): Promise<void> {
    const character = await this.characterService.findOne(characterId);

    const hasAmulet = character.hasAmulet();

    if (hasAmulet) {
      throw new BadRequestException('Character already has an amulet');
    }
  }
}
