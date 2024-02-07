
import {Injectable, OnModuleInit } from "@nestjs/common";
import {PrismaClient} from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    private _item: any;
    public get item(): any {
        return this._item;
    }
    public set item(value: any) {
        this._item = value;
    }
    private _profile: any;
    public get profile(): any {
        return this._profile;
    }
    public set profile(value: any) {
        this._profile = value;
    }
    async onModuleInit() {
        await this.$connect();
    }
}