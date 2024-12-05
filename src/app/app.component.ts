import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Portfolio';
  private _defaultLanguage = 'en';

  constructor(
    private _elementRef: ElementRef,
    private _translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this._translateService.use(this._defaultLanguage);
  }

  ngAfterViewInit(): void {
    this._elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#1e1e1e';
  }
}
