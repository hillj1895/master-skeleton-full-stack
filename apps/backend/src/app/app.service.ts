import { Injectable } from '@nestjs/common';
import { Message } from '@internal/types'

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Hello API again'};
  }


  getTestData() {
    return [{ id: 1, name: 'test' }, { id: 2, name: 'test2' }];
  }
}
