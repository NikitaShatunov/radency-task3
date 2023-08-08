import {
  UsePipes,
  ValidationPipe,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('users/:id')
  getUsers(@Param('id', ParseIntPipe) id: number) {
    const res = this.appService.getUsers()[id];
    if (!res) {
      throw new HttpException('User is not found.', HttpStatus.NOT_FOUND);
    }
    return res;
  }

  @UsePipes(new ValidationPipe())
  @Post('add')
  addNote(@Body() dto: CreateDto) {
    return dto;
  }
}
