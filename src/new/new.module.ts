import { Module } from '@nestjs/common';
import { NewController } from './new.controller';
import { NewService } from './new.service';

@Module({
  controllers: [NewController],
  providers: [NewService],
})
export class NewModule {}
