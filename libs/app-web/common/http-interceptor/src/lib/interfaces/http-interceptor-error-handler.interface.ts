export interface IHttpInterceptorErrorHandler {
  handleError: (error: Error) => Promise<void>;
}
