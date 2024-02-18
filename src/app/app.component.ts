import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rpg-ffxiv';
  english = 'Welcome to the RPG Final Fanatsy XIV webSite';
  translate = "";

  constructor(private router: Router) {
  }
}
