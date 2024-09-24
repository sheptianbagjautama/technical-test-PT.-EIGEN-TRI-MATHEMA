// src/members/members.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from 'src/member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MembersService {
    constructor(
        @InjectRepository(Member)
        private membersRepository: Repository<Member>,
    ) { }

    async generateData(): Promise<Member[]> {
        const members = [
            { code: "M001", name: "Angga" },
            { code: "M002", name: "Ferry" },
            { code: "M003", name: "Putri" },
        ];

        await this.membersRepository.save(members);
        console.log('Members seeded successfully');
        return this.membersRepository.find();
    }

    async getMembers(): Promise<Member[]> {
        return this.membersRepository.find();
    }

    async getMemberBorrowCount(): Promise<Member[]> {
        return this.membersRepository.find({ relations: ['borrows'] });
    }
}
