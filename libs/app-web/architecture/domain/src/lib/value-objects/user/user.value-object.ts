import { ValueObject } from '@angular-ddd/domain-driven-design/common';
import { PHONE_NUMBER_PATTERN_REGEX } from '@angular-ddd/utils';

export interface IUserValueObjectState {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
}

export class UserValueObject extends ValueObject<IUserValueObjectState> {

  constructor(state: IUserValueObjectState) {
    super(state);
  }

  static create(args: {
    firstName?: string;
    lastName?: string;
    fullName?: string;
    email?: string;
    phoneNumber?: string;
  }): UserValueObject {
    if (args.phoneNumber && !UserValueObject.isValidPhoneNumber(args.phoneNumber)) {
      throw new Error('Invalid phone number format. Phone number must be a valid 10-digit number.');
    }

    const valueObject = new UserValueObject({
      firstName: args.firstName,
      lastName: args.lastName,
      fullName: args.fullName,
      email: args.email,
      phoneNumber: args.phoneNumber
    });

    return valueObject;
  }

  static anonymous(): UserValueObject {
    const anonymizedValue = 'ANONYMIZED';
    return new UserValueObject({
      firstName: anonymizedValue,
      lastName: anonymizedValue,
      fullName: anonymizedValue,
      email: anonymizedValue,
      phoneNumber: anonymizedValue
    });
  }

  static system(): UserValueObject {
    const systemValue = 'SYSTEM';
    return new UserValueObject({
      firstName: systemValue,
      lastName: systemValue,
      fullName: systemValue,
      email: systemValue,
      phoneNumber: systemValue
    });
  }

  get firstName(): string {
    return this.state.firstName ?? '';
  }

  get lastName(): string {
    return this.state.lastName ?? '';
  }

  get fullName(): string {
    return this.state.fullName ?? `${this.firstName} ${this.lastName}`.trim();
  }

  get email(): string {
    return this.state.email ?? '';
  }

  get phoneNumber(): string {
    return this.state.phoneNumber ?? '';
  }

  private static isValidPhoneNumber(phoneNumber: string): boolean {
    return PHONE_NUMBER_PATTERN_REGEX.test(phoneNumber);
  }
}
