import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserResolver } from 'src/user/graphql/user.resolver'; // Ajusta la ruta según la ubicación de tu resolver de usuario

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    PrismaModule,
  ],
  providers: [UserResolver], // add resolvers
})
export class GraphQLApiModule {}
