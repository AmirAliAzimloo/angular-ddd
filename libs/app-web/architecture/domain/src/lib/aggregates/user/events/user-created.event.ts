import { Identity } from "@angular-ddd/domain-driven-design/common";
import { IDomainEvent } from "libs/app-web/common/domain-driven-design/common/src/lib/events";

export class UserCreatedEvent implements IDomainEvent {
    type = 'UserCreated'; 
    payload: { id: Identity; username: string };
  
    constructor(id: Identity, username: string) {
      this.payload = { id, username };
    }
  }