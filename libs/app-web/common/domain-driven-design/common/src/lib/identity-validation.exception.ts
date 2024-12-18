export class IdentityValidationException extends Error {
  constructor(id: string) {
    super(`Invalid UUID: '${id}'`);
  }
}
