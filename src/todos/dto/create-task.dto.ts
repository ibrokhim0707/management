import { IsString, IsOptional, IsDate } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  photo: string;

  @IsDate()
  dueDate: Date;

  @IsString()
  priority: string;

  @IsString()
  status: string;

  @IsOptional()
  @IsString()
  categoryId?: string;
}
