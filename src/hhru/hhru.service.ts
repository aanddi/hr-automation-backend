import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class HhruService {
  constructor(private readonly configService: ConfigService) {}

  async searchResume(params: string, accessToken: string) {
    try {
      const listCandidates = await axios.get(`https://api.hh.ru/resumes?${params}`, {
        params: {
          per_page: 5,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return listCandidates.data;
    } catch (error) {
      console.log(
        `Server: Ошибка при взаимодействии с hh.ru api. Метод => hhruService.searchResume`,
        error,
      );
      throw new BadRequestException(
        `Server: Ошибка при взаимодействии с hh.ru api. Метод => hhruService.searchResume`,
      );
    }
  }
}
