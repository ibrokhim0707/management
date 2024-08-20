import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateHistoryDto {
  @IsUUID('4', { message: 'taskId must be a valid UUID' })
  readonly taskId: string;

  @IsString()
  @IsNotEmpty({ message: 'Action must not be empty' })
  @Length(1, 255, {
    message: 'Action must be between 1 and 255 characters long',
  })
  readonly action: string;
}
