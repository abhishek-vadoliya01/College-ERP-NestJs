import { Module } from '@nestjs/common';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';
import { StudentModule } from 'src/student/student.module';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
@Module({
  controllers: [AttendanceController],
  providers: [AttendanceService],
  imports: [JwtModule, StudentModule, UserModule],
})
export class AttendanceModule {}
