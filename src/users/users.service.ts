import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  // TODO: -delete this eslint disable comment
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  findAll() {
    return this.users;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }
  // TODO: remove this eslint disable comment
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
