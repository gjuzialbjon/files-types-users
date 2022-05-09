import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SKELETON_CARDS_NR } from 'src/app/core/config/constats';

@Component({
  selector: 'app-skeleton-cards',
  templateUrl: './skeleton-cards.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonCardsComponent implements OnInit {
  @Input() message: string = '';
  @Input() cardHeight: number = 100;

  nrOfCards = Array.from(Array(SKELETON_CARDS_NR).keys());

  constructor() {}

  ngOnInit(): void {}
}
