// src/books/book.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Borrow } from './borrow.entity';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column({ default: 0 })
    stock: number;

    @OneToMany(() => Borrow, (borrow) => borrow.book)
    borrows: Borrow[];
}
