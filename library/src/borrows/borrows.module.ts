// src/borrows/borrows.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorrowsService } from './borrows.service';
import { BorrowsController } from './borrows.controller';
import { Borrow } from 'src/borrow.entity';
import { Member } from 'src/member.entity';
import { Book } from 'src/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Borrow, Book, Member])],
  providers: [BorrowsService],
  controllers: [BorrowsController],
})
export class BorrowsModule { }
