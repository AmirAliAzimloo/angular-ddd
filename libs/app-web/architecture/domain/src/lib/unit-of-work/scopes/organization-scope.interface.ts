
import { Identity } from '@angular-ddd/domain-driven-design/common';
import { IScope } from './scope.interface';

export interface IOrganizationScope<TProvider> extends IScope {
    getOrganizationScoped(organizationId: Identity): TProvider;
}
