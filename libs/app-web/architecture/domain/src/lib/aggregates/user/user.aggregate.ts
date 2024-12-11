import { Identity } from '@angular-ddd/domain-driven-design/common';
import { AggregateRoot,  } from '@angular-ddd/domain-driven-design/common';
import { PHONE_NUMBER_PATTERN_REGEX } from '@angular-ddd/utils';
import { UserCreatedEvent, UserUpdatedEvent, UserDeletedEvent } from './events';

export interface IUserAggregateState {
  id: Identity;
  nationalId: string;
  username: string;
  firstName: string;
  lastName: string;
}

export class UserAggregate extends AggregateRoot<IUserAggregateState> {
  constructor(args: { id: Identity; state: IUserAggregateState }) {
    super(args.id, args.state);
  }

  static create(args: {
    id: Identity;
    nationalId: string;
    username: string;
    firstName: string;
    lastName: string;
  }): UserAggregate {
    if (!UserAggregate.isValidPhoneNumber(args.username)) {
      throw new Error('Invalid username format. Username must be a valid 10-digit phone number.');
    }

    const state: IUserAggregateState = {
      id: args.id,
      nationalId: args.nationalId,
      username: args.username,
      firstName: args.firstName,
      lastName: args.lastName,
    };

    const aggregate = new UserAggregate({ id: args.id, state });

    aggregate.addDomainEvent(
      new UserCreatedEvent(args.id, args.username)
    );

    return aggregate;
  }

  update(args: {
    firstName?: string;
    lastName?: string;
    username?: string;
  }): void {
    if (args.firstName) {
      this.setFirstName(args.firstName);
    }

    if (args.lastName) {
      this.setLastName(args.lastName);
    }

    if (args.username) {
      if (!UserAggregate.isValidPhoneNumber(args.username)) {
        throw new Error('Invalid username format. Username must be a valid 10-digit phone number.');
      }
      this.setUsername(args.username);
    }

    this.addDomainEvent(
      new UserUpdatedEvent(this.getId().getValue(), this.username)
    );
  }

  delete(): void {
    this.addDomainEvent(
      new UserDeletedEvent(this.getId().getValue())
    );
  }

  get nationalId(): string {
    return this.state.nationalId;
  }

  get username(): string {
    return this.state.username;
  }

  get firstName(): string {
    return this.state.firstName;
  }

  get lastName(): string {
    return this.state.lastName;
  }

  get fullName(): string {
    return `${this.state.firstName} ${this.state.lastName}`.trim();
  }

  private setFirstName(firstName: string): void {
    this.state.firstName = firstName;
  }

  private setLastName(lastName: string): void {
    this.state.lastName = lastName;
  }

  private setUsername(username: string): void {
    this.state.username = username;
  }

  private static isValidPhoneNumber(username: string): boolean {
    return PHONE_NUMBER_PATTERN_REGEX.test(username);
  }
}
