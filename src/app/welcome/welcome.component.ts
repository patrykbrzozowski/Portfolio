import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
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
