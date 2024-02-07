import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findUserByUsername(username: string) {
    return await this.usersRepository.findOne({ where: { username } });
  }

  async addUser(name, email, username, password) {
    await this.usersRepository.save({ name, email, username, password });
  }
}
