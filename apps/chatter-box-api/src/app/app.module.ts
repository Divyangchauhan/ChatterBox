import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from '../users/user.entity';
import { UtilsModule } from '@chatter-box/utils';

@Module({
  imports: [
    AuthModule,
    UtilsModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:'mongodb+srv://chauhandivyang:vdcsWPt6GlopU9yY@chatterbox.lwvhv4v.mongodb.net/',
      useNewUrlParser: true,
        useUnifiedTopology: true,
        logging: true,
        entities: [User],
      synchronize: true,
      database: 'ChatterBox'
    }),
],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
