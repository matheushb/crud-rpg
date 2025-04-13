import { MagicItem } from '@/modules/magic-item/entity/magic-item.entity';
import { MagicItemType } from '@/modules/magic-item/enums/magic-item-type.enum';
import { UnprocessableEntityException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'node:crypto';
import { Class } from '../enums/class.enum';

interface CharacterProps {
  id?: string;
  name: string;
  nickname: string;
  class: Class;
  defense: number;
  strength: number;
  level: number;
  magic_items?: MagicItem[];
  created_at?: Date;
  updated_at?: Date;
}
export class Character {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  nickname: string;

  @ApiProperty({ enum: Class, example: Class.WARRIOR })
  class: Class;

  @ApiProperty()
  level: number;

  @ApiProperty()
  strength: number;

  @ApiProperty()
  defense: number;

  @ApiProperty({ type: [MagicItem] })
  magic_items?: MagicItem[];

  @ApiProperty({ example: new Date() })
  created_at: Date;

  @ApiProperty({ example: new Date() })
  updated_at: Date;

  constructor(entity: CharacterProps) {
    const { defense, strength } = entity;

    if (strength + defense > 10) {
      throw new UnprocessableEntityException(
        'The sum of strength and defense must be between 0 and 10',
      );
    }

    this.id = entity.id ?? randomUUID();
    this.name = entity.name;
    this.nickname = entity.nickname;
    this.class = entity.class;
    this.level = entity.level;
    this.magic_items = entity.magic_items ?? [];

    const { sumDefense, sumStrength } = this.magic_items.reduce(
      (stats, magicItem) => {
        const { strength, defense } = magicItem;

        stats.sumDefense += defense;
        stats.sumStrength += strength;

        return stats;
      },
      { sumStrength: entity.strength, sumDefense: entity.defense },
    );

    this.strength = sumStrength;
    this.defense = sumDefense;
    this.created_at = entity.created_at ?? new Date();
    this.updated_at = entity.updated_at ?? new Date();
  }

  hasAmulet(): boolean {
    return this.magic_items.some((item) => item.type === MagicItemType.AMULET);
  }

  get getStrength(): number {
    if (!this.magic_items || !this.magic_items.length) return this.strength;

    return this.magic_items.reduce((totalStrength, magicItem) => {
      totalStrength += magicItem.strength;

      return totalStrength;
    }, this.strength);
  }

  get getDefense(): number {
    if (!this.magic_items || !this.magic_items.length) return this.defense;

    return this.magic_items.reduce((totalDefense, magicItem) => {
      totalDefense += magicItem.defense;

      return totalDefense;
    }, this.defense);
  }
}
