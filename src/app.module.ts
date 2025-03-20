import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { validationDotEnv } from './core/config/env/validation.env';
import { configEnv } from './core/config/env/config.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: configEnv(process.env.NODE_ENV) || 'development',
      isGlobal: true,
      validationSchema: validationDotEnv,
    }),
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
