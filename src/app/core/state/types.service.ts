import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypesState } from './models/states';
import { DataService } from '../services/data.service';
import { StateService } from './state.service';

const initialState: TypesState = {
  types: [],
  loading: false,
  failed: false
};

@Injectable({
  providedIn: 'root'
})
export class TypesService extends StateService<TypesState> {
  constructor(private dataService: DataService) {
    super(initialState);

    this.loadTypes();
  }

  typesState$: Observable<TypesState> = this.select((state) => state);

  loadTypes() {
    this.setState({ loading: true, failed: false });
    this.dataService.getTypes().subscribe({
      next: (types) => this.setState({ types, loading: false }),
      error: (e) => {
        console.error(e);
        this.setState({ ...initialState, failed: true });
      }
    });
  }
}
