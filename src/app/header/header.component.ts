import { Component } from '@angular/core';
import { CounterBtnComponent } from '../counter-btn/counter-btn.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CounterBtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
