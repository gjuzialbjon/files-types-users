import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypesListComponent } from './containers/types-list/types-list.component';
import { TypeComponent } from './components/type/type.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
  {
    path: '',
    component: TypesListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [TypesListComponent, TypeComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule]
})
export class TypesModule {}
