import { IDomainEvent } from "libs/app-web/common/domain-driven-design/common/src/lib/events";

export class UserUpdatedEvent implements IDomainEvent {
  type = 'UserUpdated'; 
  payload: { id: string; username: string };

  constructor(id: string, username: string) {
    this.payload = { id, username };
  }
}