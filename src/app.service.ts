import { Injectable } from '@nestjs/common';
interface User {
  role: string;
  name: string;
}

@Injectable()
export class AppService {
  getHello(): User {
    return {
      role: 'Admin',
      name: 'Artem',
    };
  }
}
