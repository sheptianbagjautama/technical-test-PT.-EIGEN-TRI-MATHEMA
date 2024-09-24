import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MembersService } from './members.service';
import { Member } from 'src/member.entity';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) { }

  @Post('generate-data')
  create(): Promise<Member[]> {
    return this.membersService.generateData();
  }

  @Get('')
  async getMembers() {
    return this.membersService.getMembers();
  }

  @Get('borrow-count')
  async getMemberBorrowCount() {
    return this.membersService.getMemberBorrowCount();
  }
}
