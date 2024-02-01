import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Name } from './name.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Name)
    private namesRepository: Repository<Name>,
  ) {}

  async addName(firstName: string, lastName: string) {
    //take the name and save it into name table of the db
    await this.namesRepository.save({
      first_name: firstName,
      last_name: lastName,
    });
    return this.getNames();
  }

  async getNames() {
    //get all the names from db
    return await this.namesRepository.find();
  }
}
