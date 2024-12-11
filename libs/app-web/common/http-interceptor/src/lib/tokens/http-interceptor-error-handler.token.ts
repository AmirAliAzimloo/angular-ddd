import { InjectionToken } from '@angular/core';

import { IHttpInterceptorErrorHandler } from '../interfaces';

export const HTTP_INTERCEPTOR_ERROR_HANDLER = new InjectionToken<IHttpInterceptorErrorHandler>(
  'HTTP_INTERCEPTOR_ERROR_HANDLER'
);
