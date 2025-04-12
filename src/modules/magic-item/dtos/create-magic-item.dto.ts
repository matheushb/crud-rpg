import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MagicItemType } from '../enums/magic-item-type.enum';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  Max,
  Min,
} from 'class-validator';

export class CreateMagicItemDto {
  @ApiProperty()
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'Name must contain only letters',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(10)
  strength: number;

  @ApiPropertyOptional()
  @IsUUID()
  @IsOptional()
  character_id?: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(10)
  defense: number;

  @ApiProperty({ enum: MagicItemType, enumName: 'MagicItemType' })
  @IsEnum(MagicItemType)
  type: MagicItemType;
}
