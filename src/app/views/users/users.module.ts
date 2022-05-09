import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './containers/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
  {
    path: '',
    component: UsersListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [UsersListComponent, UserComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule]
})
export class UsersModule {}
