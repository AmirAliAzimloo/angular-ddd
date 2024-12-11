import { Injectable, Inject } from '@angular/core';
import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { HTTP_INTERCEPTOR_ERROR_HANDLER } from './tokens';
import { IHttpInterceptorErrorHandler } from './interfaces';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    @Inject(HTTP_INTERCEPTOR_ERROR_HANDLER)
    private errorHandler: IHttpInterceptorErrorHandler
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap({
        next: (event) => {
          if (event.type === HttpEventType.Response) {
            console.log('[Incoming Response]');
            console.log(event.status);
            console.log(event.body);
          }
        },
      }),
      catchError(async (error) => {
        await this.errorHandler.handleError(error);
        throw error;
      })
    );
  }
}
