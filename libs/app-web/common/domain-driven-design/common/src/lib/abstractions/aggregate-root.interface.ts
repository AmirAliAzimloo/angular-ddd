import { IDomainEvent } from '../events';

export interface IAggregateRoot {
  getId(): any;
  getState(): any;
  getDomainEvents(): IDomainEvent[];
  addDomainEvent(event: IDomainEvent): void;
  clearDomainEvents(): void;
  equals(object?: IAggregateRoot): boolean;
}
