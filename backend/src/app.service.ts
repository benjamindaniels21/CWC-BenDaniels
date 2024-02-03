import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  // constructor(
  //   @InjectRepository(Users)
  //   private namesRepository: Repository<Users>,
  // ) {}
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
