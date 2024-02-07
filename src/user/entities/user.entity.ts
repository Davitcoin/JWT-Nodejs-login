// user.entity.ts
import { Prisma } from '@prisma/client';

export class User implements Prisma.UserCreateInput {
  id: string;
  username: string;
  email: string;
  password: string;
}