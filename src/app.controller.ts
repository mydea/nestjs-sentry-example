import * as Sentry from '@sentry/node';
import { Controller, Get, HttpException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    // Start a child span for the request handler
    return Sentry.startSpan(
      {
        op: 'http.server',
        name: `AppController.getHello()`,
      },
      () => this.appService.getHello(),
    );
  }

  @Get('throw')
  throwError(): string {
    throw new HttpException({ message: 'Sample Error' }, 500);
  }
}
