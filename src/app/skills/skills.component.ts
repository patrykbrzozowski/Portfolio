import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  constructor(private _meta: Meta, private _title: Title) {
    this._title.setTitle('Patryk Brzozowski');
    this._meta.addTags([
      { name: 'description', content: 'Patryk Brzozowski' },
      {
        name: 'keywords',
        content: 'Patryk Brzozowski, Portfolio, .NET, .NET Developer, programista',
      },
      { name: 'author', content: 'Patryk Brzozowski' },
    ]);
  }
}
