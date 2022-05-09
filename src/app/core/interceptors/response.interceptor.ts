import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { concatMap, delay, Observable, of, retryWhen, throwError } from 'rxjs';
import { DELAY_TIME, RETRY_COUNT } from '../config/constats';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retryWhen((error) =>
        error.pipe(
          delay(DELAY_TIME),
          concatMap((error, count) => {
            if (count < RETRY_COUNT && error.status >= 500) {
              return of(error);
            }
            return throwError(() => new Error(`Could not receive data`));
          })
        )
      )
    );
  }
}
