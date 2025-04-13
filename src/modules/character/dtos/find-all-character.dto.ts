import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Class } from '../enums/class.enum';

export class FindAllCharacterParams {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  nickname?: string;

  @ApiPropertyOptional({ enum: Class, enumName: 'Class' })
  @IsOptional()
  @IsEnum(Class)
  class?: Class;
}
