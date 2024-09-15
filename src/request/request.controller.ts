import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get('/all')
  async getAllRequests() {
    return this.requestService.getAllRequests();
  }

  @Get('/byId/:id')
  async getRequestsById(@Param('id') idRequest: number) {
    return this.requestService.getRequestsById(idRequest);
  }

  @HttpCode(200)
  @Post('/create')
  async createRequest(@Body() dto: CreateRequestDto) {
    const { resumes, urlHh, prompt } = dto;
    return this.requestService.createRequests(resumes, urlHh, prompt);
  }

  @Delete('/delete/:id')
  async deleteRequestById(@Param('id') idRequest: number) {
    return this.requestService.deleteRequestById(idRequest);
  }
}
