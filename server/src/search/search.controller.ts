import { Controller, Get, Query } from '@nestjs/common';
import { SearchResults, SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}
  @Get()
  async search(@Query('query') query: string): Promise<SearchResults> {
    return this.searchService.search(query);
  }
}
