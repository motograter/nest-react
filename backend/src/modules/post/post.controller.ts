import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { PostService } from './post.service'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { Post as PostDto } from '@prisma/client'
@Controller('api/v1/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async createPost(@Body() createPostDto: PostDto){
    return this.postService.createPost(createPostDto)
  }

  @Get()
  async getAllPosts() {
    return this.postService.getAllPosts()
  }
  // @Get()
  // findAll() {}

  // @Get(':id')
  // findOne(@Param('id') id: string) {}

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {}

  // @Delete(':id')
  // remove(@Param('id') id: string) {}
}
