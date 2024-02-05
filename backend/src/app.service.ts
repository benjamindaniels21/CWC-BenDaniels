import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users/entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  // async addName(name: string) {
  //   //take the name and save it into name table of the db
  //   const nameData = await this.namesRepository.save({ Name });
  //   return nameData;
  // }
  // async getNames() {
  //   //get all the names from db
  //   const names = await this.namesRepository.find();
  //   console.log('NAMES:', names);
  //   return names;
  // }
}
