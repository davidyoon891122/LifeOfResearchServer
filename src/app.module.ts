import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewModule } from './new/new.module';

@Module({
  imports: [NewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
