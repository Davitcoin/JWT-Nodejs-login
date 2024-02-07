import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Module ({
    providers: [PrismaService],
    exports: [PrismaService]
})

export class PrismaModule {
  static forRoot(arg0: { datasources: { url: string; }[]; }): import("@nestjs/common").Type<any> | import("@nestjs/common").DynamicModule | Promise<import("@nestjs/common").DynamicModule> | import("@nestjs/common").ForwardReference<any> {
    throw new Error('Method not implemented.');
  }
}