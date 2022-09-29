import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { IsArray, IsBoolean, IsEmail, IsNumber, IsString } from 'class-validator'

export type UserDocument = User & Document

@Schema()
export class User {
  
  @Prop()
  @IsString()
  name: string

  @Prop()
  @IsEmail()
  email: string

  @Prop()
  @IsBoolean()
  active: boolean

  @Prop()
  @IsString()
  author: string

  @Prop()
  @IsNumber()
  publishYear: number

  @Prop()
  @IsArray()
  posts: any[]
}

export const UserSchema = SchemaFactory.createForClass(User)
