import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilesState } from './models/states';
import { DataService } from '../services/data.service';
import { StateService } from './state.service';

const initialState: FilesState = {
  files: [],
  loading: false,
  failed: false
};

@Injectable({
  providedIn: 'root'
})
export class FilesService extends StateService<FilesState> {
  constructor(private dataService: DataService) {
    super(initialState);

    this.loadFiles();
  }

  filesState$: Observable<FilesState> = this.select((state) => state);

  loadFiles() {
    this.setState({ loading: true, failed: false });
    this.dataService.getFiles().subscribe({
      next: (files) => this.setState({ ...initialState, files }),
      error: (e) => {
        console.error(e);
        this.setState({ ...initialState, failed: true });
      }
    });
  }
}
