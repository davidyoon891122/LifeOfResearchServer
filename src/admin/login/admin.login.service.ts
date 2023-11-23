import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import AdminUser from './entity/admin-user.entity';
import { Repository } from 'typeorm';
import { SearchAdminUserDto } from './dto/search-adminUser.dto';

@Injectable()
export class AdminLoginService {
  constructor(
    @InjectRepository(AdminUser)
    private adminUserRepository: Repository<AdminUser>,
  ) {}

  async checkLoginUser(loginUserInfo: SearchAdminUserDto) {
    const foundUser = await this.adminUserRepository.findOneBy({
      userId: loginUserInfo.userId,
    });

    console.log(foundUser);

    if (!foundUser) {
      throw new NotFoundException(
        `${loginUserInfo.userId} is not existed, Please check your userID`,
      );
    } else {
      if (foundUser.password === loginUserInfo.password) {
        return true;
      } else {
        return false;
      }
    }
  }

  async getAllUser(): Promise<AdminUser[]> {
    return await this.adminUserRepository.find();
  }
}
