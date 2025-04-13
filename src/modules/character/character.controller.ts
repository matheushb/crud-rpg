import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateCharacterDto } from './dtos/create-character.dto';
import { UpdateCharacterDto } from './dtos/update-character.dto';
import { CharacterService } from './character.service';
import { FindAllCharacterParams } from './dtos/find-all-character.dto';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  create(@Body() body: CreateCharacterDto) {
    return this.characterService.create(body);
  }

  @Get()
  findAll(@Query() params: FindAllCharacterParams) {
    return this.characterService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characterService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateCharacterDto) {
    return this.characterService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.characterService.delete(id);
  }
}
