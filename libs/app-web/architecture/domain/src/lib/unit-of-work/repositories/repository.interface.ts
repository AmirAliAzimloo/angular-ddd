import { IAggregateRoot, TIdentity } from "@angular-ddd/domain-driven-design/common";


export interface IAggregateBaseRepository<TAggregate extends IAggregateRoot> {
    add(aggregate: TAggregate): Promise<void>;

    addMany(aggregates: TAggregate[]): Promise<void>;

    update(aggregate: TAggregate): Promise<void>;

    updateMany(aggregates: TAggregate[]): Promise<void>;

    delete(aggregate: TAggregate): Promise<void>;

    existsById(id: TIdentity, includeDeleted?: boolean): Promise<boolean>;

    count(includeDeleted?: boolean): Promise<number>;

    getById(id: TIdentity, includeDeleted?: boolean): Promise<TAggregate>;

    getMany(args?: { ids?: TIdentity[]; includeDeleted?: boolean }): Promise<TAggregate[]>;
}
