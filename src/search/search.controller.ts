import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchDto } from './dto/search.dto';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @HttpCode(200)
  @Post('/')
  async getListCandidates(@Body() dto: SearchDto) {
    return this.searchService.getListCandidates(dto);
  }
}
