import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersState } from './models/states';
import { User } from '../models/user';
import { DataService } from '../services/data.service';
import { StateService } from './state.service';

const initialState: UsersState = {
  users: [],
  loading: false,
  failed: false
};

@Injectable({
  providedIn: 'root'
})
export class UsersService extends StateService<UsersState> {
  constructor(private dataService: DataService) {
    super(initialState);

    this.loadUsers();
  }

  usersState$: Observable<UsersState> = this.select((state) => state);

  loadUsers() {
    this.setState({ loading: true, failed: false });
    this.dataService.getUsers().subscribe({
      next: (users) => this.setState({ users, loading: false }),
      error: (e) => {
        console.error(e);
        this.setState({ ...initialState, failed: true });
      }
    });
  }
}
