import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FileStatuses } from 'src/app/core/enums/file-statuses';
import { IFile } from 'src/app/core/models/file';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit {
  @Input() file!: IFile;

  constructor() {}

  ngOnInit(): void {
  }

  get FileStatuses() {
    return FileStatuses
  }
}
