import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  async logIn(username, password) {
    const user = await this.usersService.findUserByUsername(username);

    // console.log('user password is:', user.password);
    // console.log('incoming pass is', password);
    // console.log(user.password === password);

    if (user?.password !== password) {
      console.log('incorrect password!');
    } else {
      console.log(user);
    }
  }
}
