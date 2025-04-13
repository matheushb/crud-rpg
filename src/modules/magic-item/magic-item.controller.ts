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
import { CreateMagicItemDto } from './dtos/create-magic-item.dto';
import { FindAllMagicItemsParams } from './dtos/find-all-magic-item.dto';
import { UpdateMagicItemDto } from './dtos/update-magic-item.dto';
import { MagicItemService } from './magic-item.service';

@Controller('magic-item')
export class MagicItemController {
  constructor(private readonly magicItemService: MagicItemService) {}

  @Post()
  create(@Body() body: CreateMagicItemDto) {
    return this.magicItemService.create(body);
  }

  @Get()
  findAll(@Query() params: FindAllMagicItemsParams) {
    return this.magicItemService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.magicItemService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateMagicItemDto) {
    return this.magicItemService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.magicItemService.delete(id);
  }
}
