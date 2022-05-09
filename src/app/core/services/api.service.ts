import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public get(url: string, options?: any) {
    return this.http.get(environment.BASE_API + url, options);
  }

  public post(url: string, data: any, options?: any) {
    return this.http.post(environment.BASE_API + url, data, options);
  }

  public put(url: string, data: any, options?: any) {
    return this.http.put(environment.BASE_API + url, data, options);
  }

  public delete(url: string, options?: any) {
    return this.http.delete(environment.BASE_API + url, options);
  }
}
