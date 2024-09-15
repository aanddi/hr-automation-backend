import { Controller } from '@nestjs/common';
import { HhruService } from './hhru.service';

@Controller('hhru')
export class HhruController {
  constructor(private readonly hhruService: HhruService) {}
}
