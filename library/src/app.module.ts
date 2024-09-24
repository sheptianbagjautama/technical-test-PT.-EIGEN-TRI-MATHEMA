import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Book } from './book.entity';
import { BooksModule } from './books/books.module';
import { Member } from './member.entity';
import { MembersModule } from './members/members.module';
import { SeedService } from './seeds/seed.service';
import { BorrowsModule } from './borrows/borrows.module';
import { Borrow } from './borrow.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    logging: true,
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin123',
    database: 'library',
    entities: [Book, Member, Borrow],
    synchronize: true,
  }), MembersModule, BooksModule, BorrowsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
