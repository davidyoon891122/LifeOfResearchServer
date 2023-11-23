import { Module } from '@nestjs/common';
import { AdminLoginService } from './admin.login.service';
import { AdminLoginController } from './admin.login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import AdminUser from './entity/admin-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminUser])],
  providers: [AdminLoginService],
  controllers: [AdminLoginController],
})
export class AdminLoginModule {}
