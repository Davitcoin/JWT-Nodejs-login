import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service'; // Asegúrate de que este servicio exista

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}