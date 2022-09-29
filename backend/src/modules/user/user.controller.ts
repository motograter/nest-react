import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  Res
} from '@nestjs/common'
import { UserService } from './user.service'
import { PaginationParams } from 'src/shared/dto/paginationParams'
import { CreateUserDto } from './dto/createUser.dto'
import { UpdateUserDto } from './dto/updateUser.dto.'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Res() response, @Body() createUserDto: CreateUserDto) {
    try {
      const newUser = await this.userService.create(createUserDto)
      return response.status(HttpStatus.CREATED).json({
        message: 'Student has been created successfully',
        newUser
      })
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: User not created!',
        error: 'Bad Request'
      })
    }
  }

  @Get()
  async findAll(@Res() response, @Query() { skip, limit }: PaginationParams) {
    const users = await this.userService.findAll(skip, limit)
    return response.status(HttpStatus.OK).json(users)
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query('sort', ParseBoolPipe) sort: boolean,
  ) {
    console.log(typeof id === 'number'); // true
    console.log(typeof sort === 'boolean'); // true
    return 'This action returns a user';
  }
  
  @Patch(':name')
  async updateOne(@Res() response, @Body() updateUserDto: UpdateUserDto, @Param('name') id) {
    const user = await this.userService.updateOne(id, updateUserDto)
    return response.status(HttpStatus.OK).json(user)
  }

  // @Get('/:id')
  // // async findById(@Res() response, @Param('id') id) {
  // //     const book = await this.bookService.readById(id);
  // //     return response.status(HttpStatus.OK).json({
  // //         book
  // //     })
  // }

  // @Put('/:id')
  // async update(@Res() response, @Param('id') id, @Body() book: Book) {
  //     // const updatedBook = await this.bookService.update(id, book);
  //     // return response.status(HttpStatus.OK).json({
  //     //     updatedBook
  //     // })
  // }

  // @Delete('/:id')
  // async delete(@Res() response, @Param('id') id) {
  //     // const deletedBook = await this.bookService.delete(id);
  //     // return response.status(HttpStatus.OK).json({
  //     //     deletedBook
  //     // })
  // }
}
