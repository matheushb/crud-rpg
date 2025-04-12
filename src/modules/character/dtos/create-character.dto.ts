import { ApiProperty } from '@nestjs/swagger';
import { Class } from '../enums/class.enum';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  Max,
  Min,
} from 'class-validator';

export class CreateCharacterDto {
  @ApiProperty()
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'Name must contain only letters',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nickname: string;

  @ApiProperty({ enum: Class, enumName: 'Class' })
  @IsEnum(Class)
  class: Class;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(100)
  level: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(10)
  strength: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(10)
  defense: number;
}
