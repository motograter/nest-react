import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { Post, Prisma } from '@prisma/client'
@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async createPost(data: Post) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: data.authorId
      }
    })

    if (!user) {
      throw new HttpException('User not found!!!', HttpStatus.NOT_FOUND)
    }

    return await this.prisma.post.create({
      data,
    })
  }

  async getAllPosts() {
    return await this.prisma.post.findMany()
  }
}
