import { StorageService } from '../../../configurations';
import { TokenKey } from '../../../configurations/enums/token-key.enum';

export class LocalStorageTokenService extends StorageService {
  save(key: TokenKey, token: string): void {
    try {
      localStorage.setItem(key, token);
    } catch (error) {
      console.error(`Error saving token to localStorage: ${key}`, error);
    }
  }

  get(key: TokenKey): string | null {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error(`Error retrieving token from localStorage: ${key}`, error);
      return null;
    }
  }

  remove(key: TokenKey): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing token from localStorage: ${key}`, error);
    }
  }
}
