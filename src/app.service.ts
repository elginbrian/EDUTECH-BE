import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Welcome to EDUTECH by BCC RAION RAION',
      teamMembers: [
        { name: 'Pande Gede Natha Satvika', role: 'UI/UX' },
        { name: 'Elgin Brian Wahyu Bramadhika', role: 'BE' },
        { name: 'Anak Agung Aditya Wirayudha', role: 'FE' },
      ],
    };
  }
}
