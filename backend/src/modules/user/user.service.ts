import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto'
import { User, UserDocument } from 'src/schemas/user.schema'
import { CreateUserDto } from './dto/createuser.dto'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user: CreateUserDto): Promise<User> {
    console.log(user)
    const addedUser = new this.userModel(user)
    return addedUser.save()
  }

  async findAll(
    documentsToSkip = 0,
    limitOfDocuments = 10
  ): Promise<{ users: User[]; total: number }> {
    console.log( limitOfDocuments)
    const users = await this.userModel
      .find()
      .sort({ id: 1 })
      .skip(documentsToSkip)
      .limit(limitOfDocuments)
    const total = await this.userModel.count()
    return { users, total }
  }

  async updateOne(id, update) {
    console.log(id)
    const user = await this.userModel.findOneAndUpdate(
      { name: 'Drew' },
      update,
      { new: true }
    )
    return user
  }
}
