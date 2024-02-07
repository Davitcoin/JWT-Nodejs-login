// src/user/item.controller.ts

import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemService } from './services/item.service';

@UseGuards(JwtAuthGuard)
@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  create(@Req() req, @Body() createItemDto: CreateItemDto) {
    return this.itemService.createItem(req.user.id, createItemDto);
  }

  @Get()
  findAll(@Req() req) {
    return this.itemService.findAllItems(req.user.id);
  }

  @Get(':id')
  findOne(@Req() req, @Param('id') id: string) {
    return this.itemService.findOneItem(req.user.id, +id);
  }

  @Put(':id')
  update(@Req() req, @Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemService.updateItem(req.user.id, +id, updateItemDto);
  }

  @Delete(':id')
  remove(@Req() req, @Param('id') id: string) {
    return this.itemService.removeItem(req.user.id, +id);
  }
}