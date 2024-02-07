import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // Asegúrate de importar correctamente tu servicio Prisma
import { CreateUserDto } from '../dto/create-user.dto';
import { IUserService } from '../interfaces/user-service.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService implements IUserService {
  constructor(private prisma: PrismaService) {}

  async findUserById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async createUser(createUserDto: CreateUserDto): Promise<any> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword,
      },
    });
    // Delete password before return to user
    delete user.password;
    return user;
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      delete user.password;
      return user;
    }
    return null;
  }
}
