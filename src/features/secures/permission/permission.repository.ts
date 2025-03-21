import { Injectable } from '@nestjs/common';
import { Permission } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PermissionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: {
    codePermission: string;
    namePermission: string;
    group: string;
    isSystem?: boolean;
  }): Promise<Permission> {
    return this.prisma.permission.create({ data });
  }

  async findAll(): Promise<Permission[]> {
    return this.prisma.permission.findMany();
  }

  async findById(id: number): Promise<Permission | null> {
    return this.prisma.permission.findUnique({ where: { id } });
  }

  async findByCode(codePermission: string): Promise<Permission | null> {
    return this.prisma.permission.findUnique({ where: { codePermission } });
  }

  async update(id: number, data: Partial<Permission>): Promise<Permission> {
    return this.prisma.permission.update({ where: { id }, data });
  }

  async delete(id: number): Promise<Permission> {
    return this.prisma.permission.delete({ where: { id } });
  }
}
