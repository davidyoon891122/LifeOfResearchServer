import { Body, Controller, Post } from '@nestjs/common';

@Controller('admin/login')
export class AdminLoginController {
  @Post()
  loginProcess(@Body() userLoginInfo) {
    console.log(userLoginInfo);
  }
}
