import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable, Subject, takeUntil } from 'rxjs';
import { emptyUser } from 'src/app/core/config/constats';
import { groupBy } from 'src/app/core/functions';
import { IFile } from 'src/app/core/models/file';
import { IType } from 'src/app/core/models/type';
import { User } from 'src/app/core/models/user';
import { FilesService } from 'src/app/core/state/files.service';
import { FilesState, UsersState } from 'src/app/core/state/models/states';
import { TypesService } from 'src/app/core/state/types.service';
import { UsersService } from 'src/app/core/state/users.service';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilesListComponent implements OnInit {
  filesState$!: Observable<FilesState>;
  usersState$!: Observable<UsersState>;
  types: IType[] = [];
  files: IFile[] = [];
  groupedFiles: { [key: string]: IFile[] } = {};
  destroyed$ = new Subject<boolean>();
  usersMap!: Map<number, User>;

  constructor(
    private filesService: FilesService,
    private usersService: UsersService,
    private typesService: TypesService,
    private chRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.filesState$ = this.filesService.filesState$.pipe(takeUntil(this.destroyed$));
    this.usersState$ = this.usersService.usersState$.pipe(takeUntil(this.destroyed$));
    this.typesService.typesState$.pipe(takeUntil(this.destroyed$)).subscribe((typesState) => {
      this.types = typesState.types;
      this.chRef.markForCheck();
    });

    combineLatest([
      this.filesState$.pipe(map((filesState) => filesState.files)),
      this.usersState$.pipe(map((usersState) => usersState.users)),
      this.usersState$.pipe(map((usersState) => usersState.failed))
    ]).subscribe(([files, users, failedUsers]) => {
      Object.assign(this.files, files);
      this.usersMap = new Map(users.map((user) => [user.id, user]));

      if (this.usersMap.size > 0 || failedUsers) {
        for (const file of this.files) {
          file.userCreatedBy = failedUsers ? emptyUser : this.usersMap.get(file.createdBy);
          file.userModifiedBy = failedUsers ? emptyUser : this.usersMap.get(file.modifiedBy);
        }
      }

      this.groupedFiles = groupBy(this.files, (file) => file.type);
      this.chRef.markForCheck();
    });
  }

  getFileGroupTypeName(key: string) {
    return this.types.find((type) => type.id === key)?.name || `${key[0].toUpperCase()}${key.slice(1)}`;
  }

  trackBy(index: number, file: IFile) {
    return file.id;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
