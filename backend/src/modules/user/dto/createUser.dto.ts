import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength
} from 'class-validator'
import { Type } from 'class-transformer'
export class CreateUserDto {
  
  @IsNotEmpty() 
  @Type(() => Number)
  id: Number

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string

  @IsNotEmpty()
  @IsEmail()
  readonly email: string

  @IsOptional()
  @IsBoolean()
  readonly active: boolean = true

  @IsOptional()
  @IsString()
  readonly author: string

  @IsOptional()
  @IsNumber()
  readonly publishYear: number

  @IsOptional()
  @IsArray()
  readonly posts: any[]
}
