import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { IHttpInterceptorErrorHandler } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements IHttpInterceptorErrorHandler {
  constructor() {
    console.log('ErrorHandlerService instantiated');
  }

  async handleError(error: Error): Promise<void> {
    const errorMessage =
      error instanceof HttpErrorResponse
        ? `Error ${error.status}: ${error.message || 'Something went wrong'}`
        : `Error: ${error.message}`;
    
    if (typeof window !== 'undefined') {
      alert(errorMessage);
    }
    console.log('Logging error:', error);
    console.error(error);
  }
  
}
