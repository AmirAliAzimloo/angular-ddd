import { ShallowEqual } from "@angular-ddd/utils"; 

export abstract class ValueObject<TValueObjectState> {
  protected state: TValueObjectState;

  constructor(state: TValueObjectState) {
    this.state = state;
  }

  getState(): TValueObjectState {
    return this.state;
  }

  equals(object?: ValueObject<TValueObjectState>): boolean {
    if (!object) {
      return false;
    }

    return ShallowEqual.isEqual(this.getState(), object.getState());
  }
}
