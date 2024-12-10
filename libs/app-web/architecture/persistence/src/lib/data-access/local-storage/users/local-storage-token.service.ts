import { StorageService } from '../../../configurations';
import { TokenKey } from '../../../configurations/enums/token-key.enum';

export class LocalStorageTokenService extends StorageService {
  saveToken(token: string): void {
    try {
      localStorage.setItem(TokenKey.AuthToken, token);
    } catch (error) {
      console.error(
        `Error saving token to localStorage: ${TokenKey.AuthToken}`,
        error
      );
    }
  }

  getToken(key: TokenKey): string | null {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error(`Error retrieving token from localStorage: ${key}`, error);
      return null;
    }
  }

  removeToken(key: TokenKey): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing token from localStorage: ${key}`, error);
    }
  }

  save(value: string): void {
    this.saveToken(value);
  }

  get(key: TokenKey): string | null {
    return this.getToken(key);
  }

  remove(key: TokenKey): void {
    this.removeToken(key);
  }
}
