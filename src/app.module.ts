import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration]
  }), SequelizeModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (ConfigService: ConfigService) => ({
      dialect: 'postgres',
      host: ConfigService.get('db_host'),
      port: ConfigService.get('db_port'),
      database: ConfigService.get('db_name'),
      username: ConfigService.get('db_user'),
      password: ConfigService.get('db_password'),
      synchronize: true,
      models : []
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
