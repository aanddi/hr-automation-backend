import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { HhruService } from 'src/hhru/hhru.service';
import { RequestService } from '@request/request.service';
import { PrismaService } from '@prisma.service';

@Module({
  controllers: [SearchController],
  providers: [SearchService, HhruService, RequestService, PrismaService],
})
export class SearchModule {}
