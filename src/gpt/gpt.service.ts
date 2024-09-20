import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  private readonly openai: OpenAI;

  constructor(private readonly configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get('OPENAI_API_TOKEN'),
    });
  }

  async Assistant(idAssistant: string, desc: string): Promise<string> {
    if (!idAssistant) throw new BadRequestException('Server: Assistant ID не установлен');

    try {
      const thread = await this.openai.beta.threads.create();

      await this.openai.beta.threads.messages.create(thread.id, {
        role: 'user',
        content: desc,
      });

      const run = await this.openai.beta.threads.runs.createAndPoll(thread.id, {
        assistant_id: idAssistant,
      });

      if (run.status === 'completed') {
        const messages = await this.openai.beta.threads.messages.list(run.thread_id);

        const assistantMessage = messages.data.reverse().find((msg) => msg.role === 'assistant');

        let generatedQuery = '';

        if (assistantMessage && assistantMessage.content) {
          for (const block of assistantMessage.content) {
            if ('text' in block) {
              generatedQuery += block.text.value;
            }
          }
        }

        console.log(generatedQuery);

        return generatedQuery;
      } else {
        console.log('Run status:', run.status);
        throw new BadRequestException(
          'Server: Ошибка при создании запроса ассистенту. => gptService.Assistant',
        );
      }
    } catch (error) {
      console.error(
        'Server: Ошибка при взаимодействии с OpenAI API. => gptService.Assistant ',
        error,
      );
      throw new BadRequestException(
        'Server: Ошибка при взаимодействии с OpenAI API. => gptService.Assistant ',
      );
    }
  }
}
