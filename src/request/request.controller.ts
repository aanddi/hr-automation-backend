import { Controller, Delete, Get, Param } from '@nestjs/common';
import { RequestService } from './request.service';

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

  @Delete('/delete/:id')
  async deleteRequestById(@Param('id') idRequest: number) {
    return this.requestService.deleteRequestById(idRequest);
  }
}
