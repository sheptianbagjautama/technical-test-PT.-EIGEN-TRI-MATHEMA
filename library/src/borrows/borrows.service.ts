// src/borrows/borrows.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/book.entity';
import { Borrow } from 'src/borrow.entity';
import { Member } from 'src/member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BorrowsService {
    constructor(
        @InjectRepository(Borrow)
        private borrowRepository: Repository<Borrow>,
        @InjectRepository(Book)
        private bookRepository: Repository<Book>,
        @InjectRepository(Member)
        private memberRepository: Repository<Member>,
    ) { }

    async borrowBook(memberId: number, bookId: number): Promise<string> {
        try {
            const member = await this.memberRepository.findOne({
                where: { id: memberId },
                relations: ['borrows'],
            });

            const book = await this.bookRepository.findOne({
                where: { id: bookId },
                relations: ['borrows'],
            });

            console.log(member)
            console.log(book)

            if (!member || !book) {
                return 'Member or Book not found';
            }
            if (member.isPenalized) {
                return 'Member is penalized and cannot borrow books';
            }
            if (member.borrowedCount >= 2) {
                return 'Member has already borrowed 2 books';
            }
            if (book.stock <= 0 || book.borrows.some(b => !b.isReturned)) {
                return 'Book is currently borrowed by another member';
            }

            const borrow = this.borrowRepository.create({
                member: { id: member.id },
                book: { id: book.id },
                borrowDate: new Date(),
                isReturned: false,
            });

            console.log('Borrow object before save:', borrow);

            await this.borrowRepository.save(borrow);
            book.stock -= 1;
            member.borrowedCount += 1;

            await this.bookRepository.save(book);
            await this.memberRepository.save(member);

            return 'Book borrowed successfully';
        } catch (error) {
            console.error('Error saving borrow record:', error);
        }
    }


    async returnBook(borrowId: number): Promise<string> {
        const borrow = await this.borrowRepository.findOne({
            where: { id: borrowId },
            relations: ['member', 'book'],
        });

        if (!borrow || borrow.isReturned) {
            return 'Borrow record not found or already returned';
        }

        const now = new Date();
        borrow.returnDate = now;
        borrow.isReturned = true;

        const daysLate = Math.floor((now.getTime() - borrow.borrowDate.getTime()) / (1000 * 60 * 60 * 24));
        if (daysLate > 7) {
            borrow.member.isPenalized = true;
            setTimeout(() => {
                borrow.member.isPenalized = false;
            }, 3 * 24 * 60 * 60 * 1000); // 3 Hari
        }

        await this.borrowRepository.save(borrow);
        await this.memberRepository.save(borrow.member);

        const book = borrow.book;
        book.stock += 1;
        await this.bookRepository.save(book);

        return 'Book returned successfully';
    }

    async getBorrows(): Promise<Borrow[]> {
        return this.borrowRepository.find({ relations: ['member', 'book'], });
    }
}
