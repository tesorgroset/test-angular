import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class LoaderInterceptor implements HttpInterceptor {
    constructor(public loaderService : LoaderService){

    }

    intercept(req: HttpRequest<any>, next : HttpHandler):Observable<HttpEvent<any>> {
        this.loaderService.show();
        return next.handle(req).pipe(finalize(() => this.loaderService.hide()));
    }
}