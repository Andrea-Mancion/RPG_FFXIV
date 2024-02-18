import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hyur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hyur.component.html',
  styleUrl: './hyur.component.css'
})
export class HyurComponent {
  public midlanders: boolean = true;
  public highlanders: boolean = false;

  constructor() {}

  public midlandersShow() {
    if (this.highlanders)
      this.highlanders = false;
    this.midlanders = true;
  }

  public highlandersShow() {
    if (this.midlanders)
      this.midlanders = false;
    this.highlanders = true;
  }
}
