import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesListComponent } from './containers/files-list/files-list.component';
import { FileComponent } from './components/file/file.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
  {
    path: '',
    component: FilesListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [FilesListComponent, FileComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule]
})
export class FilesModule {}
