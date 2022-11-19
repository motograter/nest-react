import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from 'src/modules/user/user.module'
import { PostModule } from './modules/post/post.module';
@Module({
  imports: [
    
    // CoffeesModule,
    // MongooseModule.forRoot(
    //   'mongodb+srv://test:test@cluster0.1atatml.mongodb.net/?retryWrites=true&w=majority'
    // ),
    UserModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
