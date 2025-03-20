import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'fr',
      fallbacks: {
        'en-*': 'en',
        'fr-*': 'fr',
      },
      loaderOptions: {
        path: join(__dirname, '..', '/lang/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
        new HeaderResolver(['x-lang']),
      ],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
