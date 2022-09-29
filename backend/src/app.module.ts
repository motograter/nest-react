import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { AppService } from './app.service'
import { UserModule } from 'src/modules/user/user.module'
@Module({
  imports: [
    // CoffeesModule,
    MongooseModule.forRoot(
      'mongodb+srv://test:test@cluster0.1atatml.mongodb.net/?retryWrites=true&w=majority'
    ),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
