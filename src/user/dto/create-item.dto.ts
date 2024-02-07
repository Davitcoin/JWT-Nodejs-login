import { ApiProperty } from '@nestjs/swagger';
import { ItemType } from '@prisma/client';

export class CreateItemDto {
  @ApiProperty({ description: 'The name of the bot' })
  name: string;

  @ApiProperty({ description: 'The description of the bot' })
  description: string;

  @ApiProperty({ enum: ItemType, description: 'The type of the item TG or Whatsapp' })
  type: ItemType;
}
