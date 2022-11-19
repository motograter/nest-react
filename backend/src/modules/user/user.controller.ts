import {
  ArgumentMetadata,
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  Patch,
  PipeTransform,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common'
import { UserService } from './user.service'
import { PaginationParams } from 'src/shared/dto/paginationParams'
import { CreateUserDto } from './dto/createUser.dto'
import { UpdateUserDto } from './dto/updateUser.dto.'
import { User } from '@prisma/client'
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util'
import { query } from 'express'
import { IsNumber, IsOptional, IsString } from 'class-validator'

import { Type } from 'class-transformer'
@Injectable()
class QueryTransformPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(typeof value.take === 'string' ) {
      value.take = Number(value.take)
    }
    return value
  }
}

export class QueryParams  {

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  readonly take: number

  @IsOptional()
  @IsString()
  readonly name: string
}

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: User) {
    return await this.userService.createUser(createUserDto)
  }

  @Get()
  async getAllUsers(
    @Query() query: QueryParams,
    ) {
    return await this.userService.getAllUsers(query)
  }

  @Get(':id')
  async selectOne(@Param() {id}: {id: string}) {
    return await this.userService.selectOne(id)
  }

  @Patch(':id')
  async updateOne(
    @Param() {id}: {id: string},
    @Body() data: Partial<User>
    ): Promise<User>  {
    return await this.userService.updateOne(id, data)
  }

  @Delete(':id')
  async deleteOne(@Param() {id}: {id: string}) {
    return await this.userService.deleteOne(id)
  }

}
