import { IDomainEvent } from "@angular-ddd/domain-driven-design/common";

export class UserUpdatedEvent implements IDomainEvent {
  type = 'UserUpdated'; 
  payload: { id: string; username: string };

  constructor(id: string, username: string) {
    this.payload = { id, username };
  }
}