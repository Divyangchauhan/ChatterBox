import { Injectable } from '@nestjs/common';
import { PassportLocalModel } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(@InjectModel('User') private userModel: PassportLocalModel<any>) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ username });
    if (user && await compare(password, user.password)) {
      const { password, ...result } = user.toObject();
      return result;
    }
    return null;
  }
}
