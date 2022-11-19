import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from 'src/schemas/user.schema'
import { PrismaService } from 'src/prisma/prisma.service'
@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService]
})
export class UserModule {}
