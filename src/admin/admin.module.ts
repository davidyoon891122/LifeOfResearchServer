import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { AdminLoginModule } from './login/admin.login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import AdminUser from './login/entity/admin-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminUser]), AdminLoginModule],
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
