import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { AdminLoginModule } from './login/admin.login.module';

@Module({
  imports: [AdminLoginModule],
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
