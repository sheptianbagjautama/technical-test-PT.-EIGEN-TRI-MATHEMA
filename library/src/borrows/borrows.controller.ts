// src/borrows/borrows.controller.ts
import { Controller, Post, Param, Get } from '@nestjs/common';
import { BorrowsService } from './borrows.service';

@Controller('borrows')
export class BorrowsController {
  constructor(private readonly borrowsService: BorrowsService) { }

  @Post('borrow/:memberId/:bookId')
  async borrowBook(
    @Param('memberId') memberId: string,
    @Param('bookId') bookId: string
  ) {
    const parsedMemberId = parseInt(memberId, 10);
    const parsedBookId = parseInt(bookId, 10);
    return this.borrowsService.borrowBook(parsedMemberId, parsedBookId);
  }

  @Post('return/:borrowId')
  async returnBook(@Param('borrowId') borrowId: number) {
    return this.borrowsService.returnBook(borrowId);
  }
}
