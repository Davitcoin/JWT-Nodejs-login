import { CreateUserDto } from '../dto/create-user.dto';

export interface IUserService {
  createUser(createUserDto: CreateUserDto): Promise<any>;
  validateUser(email: string, password: string): Promise<any>;
}