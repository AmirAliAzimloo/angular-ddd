import { UserAggregate } from '../../../aggregates';
import { IOrganizationScope } from '../../scopes/organization-scope.interface';
import { IAggregateBaseRepository } from '../repository.interface';

export interface IUserAggregateRepository
  extends IAggregateBaseRepository<UserAggregate>,
    IOrganizationScope<IUserAggregateRepository> {}
