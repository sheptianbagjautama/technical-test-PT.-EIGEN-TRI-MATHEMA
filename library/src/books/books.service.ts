import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/book.entity';
import { Code, Repository } from 'typeorm';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private booksRepository: Repository<Book>,
    ) { }

    async generateData(): Promise<Book[]> {
        const books = [
            { code: "JK-45", title: "Harry Potter", author: "J.K Rowling", stock: 1 },
            { code: "SHR-1", title: "A Study in Scarlet", author: "Arthur Conan Doyle", stock: 1 },
            { code: "TW-11", title: "Twilight", author: "Stephenie Meyer", stock: 1 },
            { code: "HOB-83", title: "The Hobbit, or There and Back Again", author: "J.R.R. Tolkien", stock: 1 },
            { code: "NRN-7", title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", stock: 1 },
        ];

        await this.booksRepository.save(books);
        console.log('Books seeded successfully');
        return this.booksRepository.find();
    }

    async getBooks() {
        return this.booksRepository.find();
    }
}
