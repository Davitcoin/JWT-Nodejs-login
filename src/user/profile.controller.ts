// src/user/profile.controller.ts

import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './services/profile.service';

@UseGuards(JwtAuthGuard)
@Controller('profile')
export class ProfileController {
    
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Req() req, @Body() createProfileDto: CreateProfileDto) {
    return this.profileService.createProfile(req.user.id, createProfileDto);
  }

  @Get()
  find(@Req() req) {
    return this.profileService.getProfile(req.user.id);
  }

}