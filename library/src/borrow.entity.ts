// src/borrows/borrow.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Member } from './member.entity';
import { Book } from './book.entity';

@Entity()
export class Borrow {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Member, (member) => member.borrows, { eager: true })
    member: Member;

    @ManyToOne(() => Book, (book) => book.borrows, { eager: true })
    book: Book;

    @Column()
    borrowDate: Date;

    @Column({ nullable: true })
    returnDate: Date;

    @Column({ default: false })
    isReturned: boolean;

    @Column({ default: false })
    isPenalized: boolean;
}
