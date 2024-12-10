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

  getToken(): string | null {
    try {
      return localStorage.getItem(TokenKey.AuthToken);
    } catch (error) {
      console.error(`Error retrieving token from localStorage: ${TokenKey.AuthToken}`, error);
      return null;
    }
  }

  removeToken(): void {
    try {
      localStorage.removeItem(TokenKey.AuthToken);
    } catch (error) {
      console.error(`Error removing token from localStorage: ${TokenKey.AuthToken}`, error);
    }
  }

  save(value: string): void {
    this.saveToken(value);
  }

  get(): string | null {
    return this.getToken();
  }

  remove(): void {
    this.removeToken();
  }
}
