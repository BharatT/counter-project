import { Component } from '@angular/core';
import { CounterBtnComponent } from '../counter-btn/counter-btn.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CounterBtnComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
