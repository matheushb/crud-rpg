import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller';

@Module({
  providers: [],
  controllers: [CharacterController],
})
export class CharacterModule {}
