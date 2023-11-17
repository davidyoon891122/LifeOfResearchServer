import { Controller, Get } from '@nestjs/common';

@Controller('new')
export class NewController {
  @Get()
  getAllNewProduct() {
    return 'Hello New Products';
  }
}
