import { Component } from '@angular/core';
import { CounterBtnComponent } from '../counter-btn/counter-btn.component';
import { CounterService } from '../counter.service';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CounterBtnComponent],
  providers:[CounterService],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
