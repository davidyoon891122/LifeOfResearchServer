import { Body, Controller, Post, Res } from '@nestjs/common';
import { AdminLoginService } from './admin.login.service';
import { SearchAdminUserDto } from './dto/search-adminUser.dto';
import { Response } from 'express';

@Controller('admin/login')
export class AdminLoginController {
  constructor(private readonly adminLoginService: AdminLoginService) {}
  @Post()
  async loginProcess(
    @Res() res: Response,
    @Body() userLoginInfo: SearchAdminUserDto,
  ) {
    console.log(userLoginInfo);
    try {
      const result = await this.adminLoginService.checkLoginUser(userLoginInfo);

      if (result) {
        return res.render('main');
      } else {
        return res.render('index', { message: 'Password Error' });
      }
    } catch (error) {
      return 'Not Existed User';
    }
  }
}
