import { Module } from '@nestjs/common';
import { MagicItemController } from './magic-item.controller';

@Module({
  providers: [],
  controllers: [MagicItemController],
})
export class MagicItemModule {}
