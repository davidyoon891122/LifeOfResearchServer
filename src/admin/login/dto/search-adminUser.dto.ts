import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateAdminUserDto } from 'src/admin/dto/create-adminUser.dto';

export class SearchAdminUserDto extends PartialType(CreateAdminUserDto) {}
