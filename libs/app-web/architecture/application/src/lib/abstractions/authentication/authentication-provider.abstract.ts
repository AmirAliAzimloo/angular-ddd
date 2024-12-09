export abstract class AuthenticationProvider {
    abstract loginOTPRequest(): Promise<void>;
    abstract verifyOTPRequest(): Promise<void>;
    abstract getRefreshToken(): Promise<void>;
    abstract removeAuthToken(): Promise<void>;
    abstract logout(): Promise<void>;
    abstract getMeRequest(): Promise<void>;
}