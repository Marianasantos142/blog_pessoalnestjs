import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
    create(createUserDto: CreateUserDto) {
      const idMaxAtual = this.users[this.users.length - 1]?.
      id || 0;
      const id= idMaxAtual + 1;
      const user = {
        id,
        ...createUserDto
      };
      this.users.push(user)
     return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const index = this.users.findIndex((user) => user.id===id)

    return this.users[index]
    //return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {

    const newUser = this.findOne(id)
    const mewUser ={
      ... this.users,
      ... updateUserDto
    }
    const index = this.users.findIndex((user) => user.id === id)
    this.users [index] = newUser

    return newUser;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
