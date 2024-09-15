import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { HhruService } from 'src/hhru/hhru.service';
import { GptService } from 'src/gpt/gpt.service';

@Module({
  imports: [],
  controllers: [SearchController],
  providers: [SearchService, HhruService, GptService],
})
export class SearchModule {}
