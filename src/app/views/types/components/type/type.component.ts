import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IType } from 'src/app/core/models/type';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeComponent implements OnInit {
  @Input() type!: IType;

  constructor() {}

  ngOnInit(): void {;
  }
}
