import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}
  async create({ name }: CreateCategoryDto) {
    name = name.toLocaleLowerCase();
    const existingCategory = await this.prisma.category.findFirst({
      where: { name: name },
    });
    if (existingCategory) {
      throw new BadRequestException();
    }
    const category = await this.prisma.category.create({
      data: {
        name: name,
      },
    });
    return category;
  }

  async findAll() {
    return await this.prisma.category.findMany();
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findFirst({
      where: { id: id },
    });
    if (!category) {
      throw new NotFoundException();
    }
    return category;
  }

  async update(id: string, payload: UpdateCategoryDto) {
    await this.findOne(id);
    const existingCategory = await this.prisma.category.findFirst({
      where: { name: payload.name },
    });
    if (existingCategory) {
      throw new BadRequestException(
      );
    }
    const updateCategory = await this.prisma.category.update({
      where: { id: id },
      data: { name: payload.name },
    });
    return updateCategory;
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.category.delete({
      where: { id: id },
    });
    return ;
  }
}
