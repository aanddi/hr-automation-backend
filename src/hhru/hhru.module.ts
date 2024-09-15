import { Module } from '@nestjs/common';
import { HhruService } from './hhru.service';
import { HhruController } from './hhru.controller';

@Module({
  imports: [],
  controllers: [HhruController],
  providers: [HhruService],
})
export class HhruModule {}
