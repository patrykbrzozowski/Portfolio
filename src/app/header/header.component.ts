import { Component } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };

  isMenuCollapsed: boolean = true;

  constructor(private _translateService: TranslateService) {}

  changeLanguage(lang: string) {
    this._translateService.use(lang);
  }
}
