import { Module } from '@nestjs/common';
import { AdminLoginService } from './admin.login.service';
import { AdminLoginController } from './admin.login.controller';

@Module({
  providers: [AdminLoginService],
  controllers: [AdminLoginController],
})
export class AdminLoginModule {}
