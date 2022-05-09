import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-failed',
  templateUrl: './failed.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FailedComponent implements OnInit {
  @Input() message: string = 'Failed'

  constructor() { }

  ngOnInit(): void {
  }

}
