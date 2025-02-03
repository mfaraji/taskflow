import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProjectsService],
})
export class ProjectsModule {}
