import { IDomainEvent } from './events';  
import { IAggregateRoot } from './abstractions/aggregate-root.interface';  
import { Identity } from './identity';

const isAggregateRoot = (v: any): v is AggregateRoot<any> => {
  return v instanceof AggregateRoot;
};

export abstract class AggregateRoot<TAggregateState> implements IAggregateRoot {
  protected readonly id: Identity;
  protected state: TAggregateState;
  private domainEvents: IDomainEvent[] = [];

  constructor(id: Identity, state: TAggregateState) {
    this.id = id;
    this.state = state;
  }

  getId(): Identity {
    return this.id;
  }

  getState(): TAggregateState {
    return this.state;
  }

  getDomainEvents(): IDomainEvent[] {
    return [...this.domainEvents];
  }

  addDomainEvent(event: IDomainEvent): void {
    this.domainEvents.push(event);
  }

  clearDomainEvents(): void {
    this.domainEvents = [];
  }

  equals(object?: IAggregateRoot): boolean {
    if (object == null || object === undefined) {
      return false;
    }

    if (!isAggregateRoot(object)) {
      return false;
    }

    return this.getId().equals(object.getId());
  }
}
