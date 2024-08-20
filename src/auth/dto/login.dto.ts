import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'Ali@gmail.com' })
  @IsEmail()
  @MaxLength(32)
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'ali34' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  password: string;
}
