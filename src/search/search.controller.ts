import { Controller, Get, Query, Headers } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('/resumes')
  async getListResumes(
    @Headers('authorization') authorizationHeader: string,
    @Query('params') params: string,
  ) {
    const accessToken = authorizationHeader.split(' ')[1];
    return this.searchService.getListResumes(params, accessToken);
  }
}
