import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { MagicItemType } from '../enums/magic-item-type.enum';

export class FindAllMagicItemsParams {
  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  character_id?: string;

  @ApiPropertyOptional({ enum: MagicItemType, enumName: 'MagicItemType' })
  @IsOptional()
  @IsEnum(MagicItemType)
  type?: MagicItemType;
}
