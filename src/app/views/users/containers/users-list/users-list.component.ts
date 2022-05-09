import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { UsersState } from 'src/app/core/state/models/states';
import { UsersService } from 'src/app/core/state/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {
  usersState$!: Observable<UsersState>;
  destroyed$ = new Subject<boolean>();

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersState$ = this.usersService.usersState$.pipe(takeUntil(this.destroyed$));
  }

  trackBy(index: number, user: User) {
    return user.id;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
