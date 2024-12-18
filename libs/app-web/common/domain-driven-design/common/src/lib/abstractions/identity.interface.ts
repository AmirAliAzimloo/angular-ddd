export interface TIdentity {
    equals (identity?: TIdentity): boolean;

    toValue (): string | number;
}
