// src/user/services/profile.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from '../dto/create-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async createProfile(userId: number, createProfileDto: CreateProfileDto) {
    return this.prisma.profile.create({
      data: {
        ...createProfileDto,
        userId,
      },
    });
  }

  async getProfile(userId: number) {
    return this.prisma.profile.findUnique({
      where: {
        userId,
      },
    });
  }

  // Methods for update or delete profiles
}