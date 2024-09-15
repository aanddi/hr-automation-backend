import { Module } from '@nestjs/common';
import { GptModule } from './gpt/gpt.module';
import { ConfigModule } from '@nestjs/config';
import { HhruModule } from './hhru/hhru.module';
import { SearchModule } from './search/search.module';
import { ScoreballModule } from './scoreball/scoreball.module';
import { RequestModule } from './request/request.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    GptModule,
    HhruModule,
    SearchModule,
    ScoreballModule,
    RequestModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
