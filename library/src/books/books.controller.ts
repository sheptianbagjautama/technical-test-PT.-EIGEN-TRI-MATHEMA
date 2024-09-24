import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from 'src/book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Post('generate-data')
  create(): Promise<Book[]> {
    return this.booksService.generateData();
  }

  @Get('')
  async getBooks() {
    return this.booksService.getBooks();
  }
}
