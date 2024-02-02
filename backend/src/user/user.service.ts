import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  usersRepository: any;
  constructor(
    @InjectRepository(User)
    private namesRepository: Repository<User>,
  ) {}
  async findUserByUsername(username: string) {
    return await this.usersRepository.find({ where: username });
  }
}
