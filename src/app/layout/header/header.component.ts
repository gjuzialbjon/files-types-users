import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  navButton!: HTMLInputElement | null;

  constructor(private translate: TranslateService, private title: Title) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.navButton = document.getElementById('my-nav-check') as HTMLInputElement;
  }

  closeMenu() {
    this.navButton!.checked = false;
  }
}
