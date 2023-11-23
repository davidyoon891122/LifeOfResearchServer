import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import AdminUser from './login/entity/admin-user.entity';
import { Repository } from 'typeorm';
import { CreateAdminUserDto } from './dto/create-adminUser.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminUser)
    private adminUserRepository: Repository<AdminUser>,
  ) {}

  async createAdminUser(userInfo: CreateAdminUserDto) {
    return await this.adminUserRepository.insert(userInfo);
  }
}
