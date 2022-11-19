import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(user: User): Promise<User | any> {
    return await this.prisma.user
      .create({
        data: user
      })
      .catch((err) => {
        if (err instanceof PrismaClientKnownRequestError) {
          if (err.code === 'P2002') {
            throw new HttpException(
              {
                message:
                  'There is a unique constraint violation, a new user cannot be created with this email'
              },
              HttpStatus.CONFLICT
            )
          }
        }
        return err
      })
  }

  async getAllUsers(query: { name: string; take: number }) {
    const users = await this.prisma.user.findMany({
      where: {
        AND: {
          name: {
            contains: query.name
          }
        }
      },
      take: query.take || 50
    })
    const count = await this.prisma.user.count()
    return {
      result: users,
      total: count
    }
  }

  async selectOne(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId
      }
    })
    if (!user) {
      throw new NotFoundException({
        error: {
          message: 'User Not Found',
          status: HttpStatus.NOT_FOUND
        }
      })
    }
    return user
  }

  async updateOne(userId: string, data: Partial<User>) {
    return await this.prisma.user
      .update({
        where: {
          id: userId
        },
        data
      })
      .catch((error) => {
        throw new BadRequestException(
          new HttpErrorByCode[HttpStatus.BAD_REQUEST]()
        )
      })
  }

  async deleteOne(userId: string) {
    return await this.prisma.user.delete({
      where: {
        id: userId
      }
    })
  }
}
