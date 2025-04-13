import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';
import { CharacterPrimaMapper } from './mapper/character.prisma.mapper';
import { CharacterPrismaRepository } from './repositories/character.prisma.repository';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { CHARACTER_REPOSITORY } from './repositories/character.repository.interface';
import { CHARACTER_MAPPER } from './mapper/character.mapper';

@Module({
  providers: [
    {
      provide: CHARACTER_MAPPER,
      useFactory: () => {
        return new CharacterPrimaMapper();
      },
    },
    {
      provide: CHARACTER_REPOSITORY,
      useFactory: (
        prismaService: PrismaService,
        mapper: CharacterPrimaMapper,
      ) => {
        return new CharacterPrismaRepository(prismaService, mapper);
      },
      inject: [PrismaService, CHARACTER_MAPPER],
    },
    CharacterService,
  ],
  controllers: [CharacterController],
  exports: [CharacterService],
})
export class CharacterModule {}
