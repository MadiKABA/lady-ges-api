import { ApiProperty } from '@nestjs/swagger';

export class PermissionResponseDto {
  @ApiProperty({
    example: 1,
    description: 'Identifiant unique de la permission',
  })
  id: number;

  @ApiProperty({
    example: 'ADMIN_READ',
    description: 'Code unique de la permission',
  })
  codePermission: string;

  @ApiProperty({
    example: 'Lecture Admin',
    description: 'Nom de la permission',
  })
  namePermission: string;

  @ApiProperty({ example: 'Admin', description: 'Groupe de la permission' })
  group: string;

  @ApiProperty({ example: false, description: 'Permission système ou non' })
  isSystem: boolean;

  @ApiProperty({
    example: '2024-03-21T10:30:00Z',
    description: 'Date de création',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2024-03-21T12:00:00Z',
    description: 'Date de mise à jour',
  })
  updatedAt: Date;
}
