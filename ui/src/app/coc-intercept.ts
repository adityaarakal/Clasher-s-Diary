import { HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class CocIntercept implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var duplicate = req.clone({
            headers: new HttpHeaders({
                /* "Content-Type": "application/json", */
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjA0ZWViNjMyLWU5N2ItNDM5YS1hNDc4LTUwZDhhOTY2ZWMwNCIsImlhdCI6MTU4MjI0OTQ0MSwic3ViIjoiZGV2ZWxvcGVyLzQzMDBjYmFlLWRlMDgtMzM2Yi0zYjZhLTdiYTRlMTI1NDJhMiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE1Ny4zMy4xMjEuMjIwIiwiMTA2LjIxMi4yNTMuNzIiXSwidHlwZSI6ImNsaWVudCJ9XX0.KB5N87OVgU8vPKoq2tfq8wIjeeInQa84n-LYZ1APMIJDQlmRU0B5Kq56m9eiCg__-rGQPHs3exJAf7xaA2CcSQ"
            })
        });
        console.log("http interceptor", duplicate);
        return next.handle(duplicate);
    }
}
