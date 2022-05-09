import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonCardsComponent } from './skeleton-card/skeleton-cards.component';
import { TranslateModule } from '@ngx-translate/core';
import { FailedComponent } from './failed/failed.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SkeletonCardsComponent, FailedComponent],
  imports: [CommonModule, TranslateModule, RouterModule],
  exports: [SkeletonCardsComponent, FailedComponent, TranslateModule]
})
export class SharedModule {}
