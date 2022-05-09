import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from '../config/constats';
import { IFile } from '../models/file';
import { IType } from '../models/type';
import { User } from '../models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private apiService: ApiService) {}

  getFiles(): Observable<IFile[]> {
    return this.apiService.get(Endpoints.FILES_API) as unknown as Observable<IFile[]>;
  }

  getUsers(): Observable<User[]> {
    return this.apiService.get(Endpoints.USERS_API) as unknown as Observable<User[]>;
  }

  getTypes(): Observable<IType[]> {
    return this.apiService.get(Endpoints.TYPES_API) as unknown as Observable<IType[]>;
  }
}
