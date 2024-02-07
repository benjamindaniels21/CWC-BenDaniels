import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  async logIn(username, password) {
    const user = await this.usersService.findUserByUsername(username);
    console.log(user.password);
    if (user?.password !== password) {
      console.log('USER:', user);
    } else {
      console.log('NO USER');
    }
  }
}
