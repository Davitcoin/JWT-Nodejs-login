import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from 'src/user/services/user.service';
import { User } from '@prisma/client';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query()
  async user(@Args('id') id: number): Promise<User> {
    return this.userService.findUserById(id);
  }

  @Mutation()
async createUser(@Args('userInput') userInput: CreateUserDto): Promise<User> {
  return this.userService.createUser(userInput);
}

}
