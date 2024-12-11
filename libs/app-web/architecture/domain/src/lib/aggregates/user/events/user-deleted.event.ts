import { IDomainEvent } from "@angular-ddd/domain-driven-design/common";

export class UserDeletedEvent implements IDomainEvent {
  type = 'UserDeleted'; 
  payload: { id: string };

  constructor(id: string) {
    this.payload = { id };
  }
}