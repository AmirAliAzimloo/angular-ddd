import { TIdentity } from './abstractions/identity.interface';

import { IdentityValidationException } from './identity-validation.exception';

import { Identifier } from './identifier';

import { isUUID } from 'class-validator';

import { v4 as uuid } from 'uuid';

export class Identity extends Identifier<string> implements TIdentity {
  constructor(id?: string) {
    if (id && !isUUID(id)) {
      throw new IdentityValidationException(id);
    }

    super(id ? id : uuid());
  }
}
