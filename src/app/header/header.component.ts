import { Component } from '@angular/core';
import { CounterBtnComponent } from '../counter-btn/counter-btn.component';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CounterBtnComponent],
  providers:[CounterService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
