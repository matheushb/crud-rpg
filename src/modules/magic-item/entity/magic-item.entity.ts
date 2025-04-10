import { ApiProperty } from '@nestjs/swagger';
import { MagicItemType } from '../enums/magic-item-type.enum';
import { EntityProps } from '@/common/types/entity-props.type';
import { randomUUID } from 'crypto';

export class MagicItem {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  strength: number;

  @ApiProperty()
  defense: number;

  @ApiProperty({ enum: MagicItemType, example: MagicItemType.WEAPON })
  type: MagicItemType;

  @ApiProperty({ example: new Date() })
  created_at: Date;

  @ApiProperty({ example: new Date() })
  updated_at: Date;

  constructor(entity: EntityProps<typeof MagicItem>) {
    this.id = entity.id ?? randomUUID();
    this.name = entity.name;
    this.strength = entity.strength;
    this.defense = entity.defense;
    this.type = entity.type;
    this.created_at = entity.created_at ?? new Date();
    this.updated_at = entity.updated_at ?? new Date();
  }
}
