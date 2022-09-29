import { PartialType, PickType } from '@nestjs/mapped-types';
import { CreateUserDto } from './createUser.dto';
 
export class UpdateUserDto extends PickType(CreateUserDto, ['email'] as const) {}