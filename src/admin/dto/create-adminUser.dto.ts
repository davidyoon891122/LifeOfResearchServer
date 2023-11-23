import { IsString } from 'class-validator';

export class CreateAdminUserDto {
  @IsString()
  userId: string;

  @IsString()
  password: string;

  @IsString()
  userName: string;

  @IsString()
  email: string;
}
