import { IDomainEvent } from "libs/app-web/common/domain-driven-design/common/src/lib/events";

export class UserDeletedEvent implements IDomainEvent {
  type = 'UserDeleted'; 
  payload: { id: string };

  constructor(id: string) {
    this.payload = { id };
  }
}