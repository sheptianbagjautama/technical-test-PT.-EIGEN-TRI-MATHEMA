// src/seeds/seed.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity';
import { Book } from './book.entity';

@Injectable()
export class SeedService {
    constructor(
        @InjectRepository(Book)
        private booksRepository: Repository<Book>,
        @InjectRepository(Member)
        private membersRepository: Repository<Member>,
    ) { }

    async seedBooks() {
        const books = [
            { code: "JK-45", title: "Harry Potter", author: "J.K Rowling", stock: 1 },
            { code: "SHR-1", title: "A Study in Scarlet", author: "Arthur Conan Doyle", stock: 1 },
            { code: "TW-11", title: "Twilight", author: "Stephenie Meyer", stock: 1 },
            { code: "HOB-83", title: "The Hobbit, or There and Back Again", author: "J.R.R. Tolkien", stock: 1 },
            { code: "NRN-7", title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", stock: 1 },
        ];

        await this.booksRepository.save(books);
        console.log('Books seeded successfully');
    }

    async seedMembers() {
        const members = [
            { code: "M001", name: "Angga" },
            { code: "M002", name: "Ferry" },
            { code: "M003", name: "Putri" },
        ];

        await this.membersRepository.save(members);
        console.log('Members seeded successfully');
    }

    async seedDatabase() {
        console.log("testing");
        await this.seedBooks();
        await this.seedMembers();
    }
}
