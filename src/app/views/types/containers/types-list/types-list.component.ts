import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IType } from 'src/app/core/models/type';
import { TypesState } from 'src/app/core/state/models/states';
import { TypesService } from 'src/app/core/state/types.service';

@Component({
  selector: 'app-types-list',
  templateUrl: './types-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypesListComponent implements OnInit {
  typesState$!: Observable<TypesState>;
  destroyed$ = new Subject<boolean>();

  constructor(private typesService: TypesService) {}

  ngOnInit(): void {
    this.typesState$ = this.typesService.typesState$.pipe(takeUntil(this.destroyed$));
  }

  trackBy(index: number, type: IType) {
    return type.id;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
