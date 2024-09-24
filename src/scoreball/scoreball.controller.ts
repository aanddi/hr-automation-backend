import { Body, Controller, HttpCode, Post, Headers } from '@nestjs/common';
import { ScoreballService } from './scoreball.service';
import { CreateScoreballDto } from './dto/create-scoreball.dto';

@Controller('scoreball')
export class ScoreballController {
  constructor(private readonly scoreballService: ScoreballService) {}

  @HttpCode(200)
  @Post()
  async createScoreball(
    @Body() dto: CreateScoreballDto,
    @Headers('authorization') authorizationHeader: string,
  ) {
    const accessToken = authorizationHeader?.split(' ')[1] || '';
    return this.scoreballService.createScoreball(dto, accessToken);
  }
}
