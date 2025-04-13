import { UnprocessableEntityException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { MagicItemType } from '../enums/magic-item-type.enum';

interface MagicItemProps {
  id?: string;
  name: string;
  strength: number;
  defense: number;
  character_id?: string;
  type: MagicItemType;
  created_at?: Date;
  updated_at?: Date;
}

export class MagicItem {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  strength: number;

  @ApiProperty()
  defense: number;

  @ApiProperty({ nullable: true })
  character_id?: string;

  @ApiProperty({ enum: MagicItemType, example: MagicItemType.WEAPON })
  type: MagicItemType;

  @ApiProperty({ example: new Date() })
  created_at: Date;

  @ApiProperty({ example: new Date() })
  updated_at: Date;

  constructor(entity: MagicItemProps) {
    const { strength, defense, type } = entity;

    if (strength + defense > 10 || strength + defense === 0) {
      throw new UnprocessableEntityException(
        'The sum of strength and defense must be between 1 and 10',
      );
    }

    if (type === MagicItemType.WEAPON && defense > 0) {
      throw new UnprocessableEntityException(
        'MagicItem of type WEAPON cannot have a defense value greater than 0',
      );
    }

    if (type === MagicItemType.ARMOUR && strength > 0) {
      throw new UnprocessableEntityException(
        'MagicItem of type ARMOUR cannot have a strength value greater than 0',
      );
    }

    this.id = entity.id ?? randomUUID();
    this.name = entity.name;
    this.strength = entity.strength;
    this.defense = entity.defense;
    this.type = entity.type;
    this.character_id = entity.character_id;
    this.created_at = entity.created_at ?? new Date();
    this.updated_at = entity.updated_at ?? new Date();
  }
}
