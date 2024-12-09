import { AggregateRoot, Identity } from '@angular-ddd/domain-driven-design/common';
import { PHONE_NUMBER_PATTERN_REGEX } from '@angular-ddd/utils'

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
      lastName: args.lastName
    };

    const aggregate = new UserAggregate({ id: args.id, state });

    aggregate.addDomainEvent({
      type: 'UserCreated',
      payload: { id: args.id.getValue(), username: args.username },
    });

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

    this.addDomainEvent({
      type: 'UserUpdated',
      payload: { id: this.getId().getValue(), username: this.username }
    });
  }

  delete(): void {
    this.addDomainEvent({
      type: 'UserDeleted',
      payload: { id: this.getId().getValue() }
    });
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

  private setFirstName(firstName: string) {
    this.state.firstName = firstName;
  }

  private setLastName(lastName: string) {
    this.state.lastName = lastName;
  }

  private setUsername(username: string) {
    this.state.username = username;
  }

  private static isValidPhoneNumber(username: string): boolean {
    return PHONE_NUMBER_PATTERN_REGEX.test(username);
  }
}
