import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  async logIn(username, password) {
    const user = await this.usersService.findUserByUsername(username);

    if (user?.password !== password) {
      console.log('incorrect password!');
    } else {
      console.log('correct');
    }
  }

  async hashedPassword(password) {
    return await bcrypt.hash(password, 10);
  }

  async signUp(name, email, username, password) {
    const hashedPassword = await this.hashedPassword(password);
    const user = await this.usersService.addUser(
      name,
      email,
      username,
      hashedPassword,
    );
    console.log('USER', user);
    // return 'hi';
  }
}
