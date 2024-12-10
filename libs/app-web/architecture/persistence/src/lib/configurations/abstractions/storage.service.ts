export abstract class StorageService {
  abstract save(value: string): void;
  abstract get(key: string): string | null;
  abstract remove(key: string): void;
}
