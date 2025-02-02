import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  getProject(projectWhereUniqueInput: Prisma.ProjectWhereUniqueInput) {
    return this.prisma.project.findUnique({
      where: projectWhereUniqueInput,
    });
  }

  getProjects(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProjectWhereUniqueInput;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.project.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  createProject(data: Prisma.ProjectCreateInput) {
    return this.prisma.project.create({
      data,
    });
  }

  updateProject(params: {
    where: Prisma.ProjectWhereUniqueInput;
    data: Prisma.ProjectUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.project.update({
      data,
      where,
    });
  }
}
