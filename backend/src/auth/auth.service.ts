import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  async logIn(username, password) {
    const user = this.usersService.findUserByUsername(username);
    console.log('USER:', user);
  }
}
