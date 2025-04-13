import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  Max,
  Min,
} from 'class-validator';

export class UpdateMagicItemDto {
  @ApiPropertyOptional()
  @IsOptional()
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'Name must contain only letters',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10)
  strength: number;

  @ApiPropertyOptional()
  @IsUUID()
  @IsOptional()
  character_id?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10)
  defense: number;
}
