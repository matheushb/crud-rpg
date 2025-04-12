import { Module } from '@nestjs/common';
import { MagicItemModule } from './modules/magic-item/magic-item.module';
import { CharacterModule } from './modules/character/character.module';
import { EnvironmentModule } from './common/environment/environment.module';
import { PrismaModule } from './infra/prisma/prisma.module';

@Module({
  imports: [EnvironmentModule, PrismaModule, MagicItemModule, CharacterModule],
  providers: [],
})
export class AppModule {}
