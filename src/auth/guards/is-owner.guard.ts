// src/user/guards/is-owner.guard.ts

import { CanActivate, ExecutionContext, Injectable, NotFoundException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IsOwnerGuard implements CanActivate {
  constructor(private reflector: Reflector, private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const itemId = parseInt(request.params.id, 10);

    if (isNaN(itemId)) {
      throw new NotFoundException('Item not found');
    }

    const item = await this.prisma.item.findUnique({
      where: { id: itemId },
    });

    if (!item) {
      throw new NotFoundException('Item not found');
    }

    return item.ownerId === user.id;
  }
}