import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { CreateAdminUserDto } from './dto/create-adminUser.dto';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  @Render('index')
  getAdminPage() {
    return {
      message: 'Admin Main Page',
    };
  }

  @Post()
  async createAdminUser(@Body() userInfo: CreateAdminUserDto) {
    return await this.adminService.createAdminUser(userInfo);
  }
}
