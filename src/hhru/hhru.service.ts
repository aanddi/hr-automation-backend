import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class HhruService {
  constructor(private readonly configService: ConfigService) {}

  async searchForUrl(url: string) {
    const accessToken = this.configService.get('HHRU_API_ACCESS_TOKEN');

    try {
      const listCandidates = await axios.get(url, {
        params: {
          page: 1,
          per_page: 6,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return listCandidates.data;
    } catch (error) {
      console.error('Error: Метод => getListСandidates', error);
      throw new BadRequestException(
        `Server: Ошибка при взаимодействии с hh.ru api. Метод => hhruService.searchForUrl. url: ${url}`,
      );
    }
  }
}
