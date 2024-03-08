import { Component } from '@angular/core';
import { CounterBtnComponent } from '../counter-btn/counter-btn.component';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CounterBtnComponent],
  providers:[CounterService],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
