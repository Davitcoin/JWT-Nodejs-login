import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // Asumiendo que has creado un PrismaService
import { UserController } from './user.controller';
import { UserService } from './services/user.service';
import { ItemService } from './services/item.service';
import { ItemController } from './item.controller';
import { ProfileService } from './services/profile.service';
import { ProfileController } from './profile.controller';

@Module({
  controllers: [UserController, ItemController, ProfileController],
  providers: [UserService, PrismaService, ItemService, ProfileService],
  exports: [UserService, ItemService, ProfileService],
})
export class UserModule {}