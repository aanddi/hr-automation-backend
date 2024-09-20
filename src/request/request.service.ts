import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { IAnalyzedResume } from 'src/common/types/resume.type';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RequestService {
  constructor(private prismaDb: PrismaService) {}

  async getAllRequests() {
    const requests = await this.prismaDb.request.findMany({
      orderBy: {
        id: 'desc',
      },
    });

    return {
      items: requests,
    };
  }

  async getRequestsById(idRequest: number) {
    const request = await this.prismaDb.request.findUnique({
      where: {
        id: +idRequest,
      },
      select: {
        id: true,
        createdAt: true,
        title: true,
        resumes: true,
      },
    });

    return {
      idRequest: request.id,
      info: {
        createdAt: request?.createdAt,
        title: request?.title,
      },
      resumes: request?.resumes,
    };
  }

  async deleteRequestById(idRequest: number) {
    return await this.prismaDb.request.delete({
      where: {
        id: +idRequest,
      },
    });
  }

  async createRequests(resumes: IAnalyzedResume[], title?: string) {
    if (!resumes || resumes.length === 0)
      throw new NotFoundException(
        'Server: Резюме не найдены при сохранении в базу данных. Попробуйте повторить анализ. => createRequests',
      );

    try {
      const newRequest = await this.prismaDb.request.create({
        data: {
          title: title ?? null,
        },
      });

      const saveResumes = resumes.map(async (resume) => {
        await this.prismaDb.resumes.create({
          data: {
            idResumeHh: resume.id,
            firstName: resume.first_name,
            lastName: resume.last_name,
            middleName: resume.middle_name,
            age: resume.age,
            title: resume.title,
            totalExperience: resume?.total_experience?.months || null,
            urlResume: resume.alternate_url,
            scoreball: resume.scoreball,
            comment: resume.comment,
            requestId: newRequest.id,
          },
        });
      });

      await Promise.all(saveResumes);

      return {
        idRequest: newRequest.id,
      };
    } catch (e) {
      console.log(e);
      throw new BadRequestException(
        'Server: При сохранении резюме произошла ошибка. => createRequests',
      );
    }
  }
}
