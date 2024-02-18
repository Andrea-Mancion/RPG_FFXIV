import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-check-characters',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './check-characters.component.html',
  styleUrl: './check-characters.component.css'
})
export class CheckCharactersComponent implements OnInit{

  ngOnInit(): void {
      console.log('CheckCharactersComponent');
  }
}
