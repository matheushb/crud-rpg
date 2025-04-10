import { ApiProperty } from '@nestjs/swagger';
import { Class } from '../enums/class.enum';
import { EntityProps } from '@/common/types/entity-props.type';
import { randomUUID } from 'node:crypto';

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

  @ApiProperty({ example: new Date() })
  created_at: Date;

  @ApiProperty({ example: new Date() })
  updated_at: Date;

  constructor(entity: EntityProps<typeof Character>) {
    this.id = entity.id ?? randomUUID();
    this.name = entity.name;
    this.nickname = entity.nickname;
    this.class = entity.class;
    this.level = entity.level;
    this.strength = entity.strength;
    this.defense = entity.defense;
    this.created_at = entity.created_at ?? new Date();
    this.updated_at = entity.updated_at ?? new Date();
  }
}
