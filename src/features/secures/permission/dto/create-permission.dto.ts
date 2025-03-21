import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { i18nValidationMessage } from 'nestjs-i18n';

export class CreatePermissionDto {
  @ApiProperty({
    example: 'Lecture Admin',
    description: 'Nom lisible de la permission',
  })
  @IsString({ message: i18nValidationMessage('validations.string') })
  @IsNotEmpty({ message: i18nValidationMessage('validations.required') })
  namePermission: string;

  @ApiProperty({
    example: 'Admin',
    description: 'Groupe auquel appartient la permission',
  })
  @IsString({ message: i18nValidationMessage('validations.string') })
  @IsNotEmpty({ message: i18nValidationMessage('validations.required') })
  @IsOptional()
  group: string;

  @ApiProperty({
    example: false,
    description: "Définit si c'est une permission système",
  })
  @IsBoolean()
  @IsOptional()
  isSystem?: boolean;
}
