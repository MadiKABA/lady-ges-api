import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

@ValidatorConstraint({ name: 'isPhoneNumber', async: false })
@Injectable()
export class IsPhoneNumberConstraint implements ValidatorConstraintInterface {
  validate(phone: string, args: ValidationArguments) {
    try {
      const phoneNumber = parsePhoneNumberFromString(phone);
      return phoneNumber?.isValid() || false;
    } catch {
      return false;
    }
  }

  defaultMessage(args: ValidationArguments) {
    return "Le numéro de téléphone n'est pas valide";
  }
}
