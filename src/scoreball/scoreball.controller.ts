import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ScoreballService } from './scoreball.service';
import { CreateScoreballDto } from './dto/create-scoreball.dto';

@Controller('scoreball')
export class ScoreballController {
  constructor(private readonly scoreballService: ScoreballService) {}

  @HttpCode(200)
  @Post()
  async createScoreball(@Body() dto: CreateScoreballDto) {
    return this.scoreballService.createScoreball(dto);
  }
}
