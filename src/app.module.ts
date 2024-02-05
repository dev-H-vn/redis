import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiConfigService } from 'src/share/services/api-config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      // imports: [SharedModule],
      useFactory: (configService: ApiConfigService) =>
        configService.mySqlConfig,
      inject: [ApiConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
