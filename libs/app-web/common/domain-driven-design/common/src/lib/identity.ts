export class Identity {
    private readonly value: string;
  
    constructor(value: string) {
      this.value = value;
    }
  
    getValue(): string {
      return this.value;
    }
  
    equals(other: Identity): boolean {
      return this.value === other.getValue();
    }
  }