import { Body, Controller, Post } from '@nestjs/common';
import { AdminLoginService } from './admin.login.service';
import { SearchAdminUserDto } from './dto/search-adminUser.dto';

@Controller('admin/login')
export class AdminLoginController {
  constructor(private readonly adminLoginService: AdminLoginService) {}
  @Post()
  async loginProcess(@Body() userLoginInfo: SearchAdminUserDto) {
    console.log(userLoginInfo);
    try {
      const result = await this.adminLoginService.checkLoginUser(userLoginInfo);

      if (result) {
        return 'Go to admin main page';
      } else {
        return 'Redirect to login page with error popup';
      }
    } catch (error) {
      return 'Not Existed User';
    }
  }
}
