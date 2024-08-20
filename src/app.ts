import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UploadsModule } from './upload/upload.module';
import { TodosModule } from './todos/todos.module';
import { CategoriesModule } from './category/category.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    UploadsModule,
    TodosModule,
    CategoriesModule,
    HistoryModule,
  ],
})
export class AppModule {}
