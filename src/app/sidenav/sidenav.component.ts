import { Component } from '@angular/core';
import { CounterBtnComponent } from '../counter-btn/counter-btn.component';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CounterBtnComponent],
  providers:[CounterService],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

}
