// src/user/services/item.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto } from '../dto/create-item.dto';
import { UpdateItemDto } from '../dto/update-item.dto';

@Injectable()

export class ItemService {
  constructor(private prisma: PrismaService) {}

  async createItem(userId: number, createItemDto: CreateItemDto) {
    return this.prisma.item.create({
      data: {
        ...createItemDto,
        ownerId: userId,
      },
    });
  }

  async findAllItems(userId: number) {
    return this.prisma.item.findMany({
      where: {
        ownerId: userId,
      },
    });
  }

  async findOneItem(userId: number, itemId: number) {
    return this.prisma.item.findFirst({
      where: {
        id: itemId,
        ownerId: userId,
      },
    });
  }

  async updateItem(userId: number, itemId: number, updateItemDto: UpdateItemDto) {
    const item = await this.prisma.item.findUnique({
      where: { id: itemId },
    });

    if (!item || item.ownerId !== userId) {
      throw new NotFoundException('Item not found or you do not have permissions');
    }

    return this.prisma.item.update({
      where: { id: itemId },
      data: updateItemDto,
    });
  }

  async removeItem(userId: number, itemId: number) {
    const item = await this.prisma.item.findUnique({
      where: { id: itemId },
    });

    if (!item || item.ownerId !== userId) {
      throw new NotFoundException('Item not found or you do not have permissions');
    }

    return this.prisma.item.delete({
      where: { id: itemId },
    });
  }
}