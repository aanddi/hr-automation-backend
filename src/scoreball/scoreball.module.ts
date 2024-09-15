import { Module } from '@nestjs/common';
import { PrismaService } from '@prisma.service';
import { ScoreballService } from './scoreball.service';
import { GptService } from '@gpt/gpt.service';
import { RequestService } from '@request/request.service';
import { ScoreballController } from './scoreball.controller';

@Module({
  controllers: [ScoreballController],
  providers: [ScoreballService, GptService, RequestService, PrismaService],
})
export class ScoreballModule {}
