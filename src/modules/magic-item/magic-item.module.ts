import { Module } from '@nestjs/common';
import { MagicItemController } from './magic-item.controller';
import { MagicItemService } from './magic-item.service';
import { MagicItemPrismaMapper } from './mapper/magic-item.prisma.mapper';
import { MagicItemPrismaRepository } from './repositories/magic-item.prisma.repository';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { MAGIC_ITEM_MAPPER } from './mapper/magic-item.mapper';
import { MAGIC_ITEM_REPOSITORY } from './repositories/magic-item.repository';
import { CharacterModule } from '../character/character.module';

@Module({
  imports: [CharacterModule],
  providers: [
    {
      provide: MAGIC_ITEM_MAPPER,
      useFactory: () => {
        return new MagicItemPrismaMapper();
      },
    },
    {
      provide: MAGIC_ITEM_REPOSITORY,
      useFactory: (
        prismaService: PrismaService,
        mapper: MagicItemPrismaMapper,
      ) => {
        return new MagicItemPrismaRepository(prismaService, mapper);
      },
      inject: [PrismaService, MAGIC_ITEM_MAPPER],
    },
    MagicItemService,
  ],
  controllers: [MagicItemController],
})
export class MagicItemModule {}
