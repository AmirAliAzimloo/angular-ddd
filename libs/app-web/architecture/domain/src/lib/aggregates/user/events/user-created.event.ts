import { Identity } from "@angular-ddd/domain-driven-design/common";
import { IDomainEvent } from "@angular-ddd/domain-driven-design/common";

export class UserCreatedEvent implements IDomainEvent {
    type = 'UserCreated'; 
    payload: { id: Identity; username: string };
  
    constructor(id: Identity, username: string) {
      this.payload = { id, username };
    }
  }