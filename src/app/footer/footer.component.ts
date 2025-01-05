import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private _meta: Meta, private _title: Title) {
    this._title.setTitle('Patryk Brzozowski');
    this._meta.addTags([
      { name: 'description', content: 'Patryk Brzozowski' },
      {
        name: 'keywords',
        content: 'Patryk Brzozowski, Portfolio, .NET, .NET Developer',
      },
      { name: 'author', content: 'Patryk Brzozowski' },
    ]);
  }
}
