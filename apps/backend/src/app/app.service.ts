import { Injectable } from '@nestjs/common';
import { Message } from '@master-skeleton-full-stack/types'

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Hello API again'};
  }
}
