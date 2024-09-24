// src/members/member.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Borrow } from './borrow.entity';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column({ default: 0 })
  borrowedCount: number;

  @Column({ default: false })
  isPenalized: boolean;

  @OneToMany(() => Borrow, (borrow) => borrow.member)
  borrows: Borrow[];
}
