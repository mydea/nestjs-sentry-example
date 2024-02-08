import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { SentryExceptionsFilter } from './sentry-exception.filter';

export const SENTRY_OPTIONS = 'SENTRY_OPTIONS';

@Module({})
export class SentryModule {
  static forRoot() {
    return {
      module: SentryModule,
      providers: [
        {
          provide: APP_FILTER,
          useClass: SentryExceptionsFilter,
        },
      ],
    };
  }
}
