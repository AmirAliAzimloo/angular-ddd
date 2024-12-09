export abstract class StorageService {
    abstract save(key: string, value: string): void;
    abstract get(key: string): string | null;
    abstract remove(key: string): void;
  }
  