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
          with_job_search_status: true,
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
        `Server: Ошибка при взаимодействии с hh.ru api. Метод => hhruService.searchResume. ${error}`,
      );
    }
  }

  async getResumeById(id: string, accessToken: string) {
    if (!id)
      throw new BadRequestException(
        `Server: Ошибка при взаимодействии с hh.ru api. Id резюме не найдено. Метод => hhruService.getResumeById`,
      );

    try {
      const resume = await axios.get(`https://api.hh.ru/resumes/${id}`, {
        params: {
          per_page: 5,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return resume;
    } catch (error) {
      console.log(
        `Server: Ошибка при взаимодействии с hh.ru api. Метод => hhruService.getResumeById`,
        error,
      );
      throw new BadRequestException(
        `Server: Ошибка при взаимодействии с hh.ru api. Метод => hhruService.getResumeById. ${error}`,
      );
    }
  }
}
