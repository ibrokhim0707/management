import { Module } from '@nestjs/common';
import { CategoriesService } from '../category/category.service';
import { CategoriesController } from '../category/category.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [PrismaModule],
})
export class CategoriesModule {}
