import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class AppService {
  constructor(private readonly i18n: I18nService) {}
  getHello(): string {
    return this.i18n.t('auth.SUCCESS_LOGIN', {
      args: { model: 'Booking' },
    });
  }
}
