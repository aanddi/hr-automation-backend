import { Module } from '@nestjs/common';
import { PrismaService } from '@prisma.service';
import { ScoreballService } from './scoreball.service';
import { GptService } from '@gpt/gpt.service';
import { RequestService } from '@request/request.service';
import { ScoreballController } from './scoreball.controller';
import { HhruService } from '@hhru/hhru.service';

@Module({
  controllers: [ScoreballController],
  providers: [ScoreballService, GptService, RequestService, PrismaService, HhruService],
})
export class ScoreballModule {}
