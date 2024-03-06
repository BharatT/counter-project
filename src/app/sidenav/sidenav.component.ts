import { Component } from '@angular/core';
import { CounterBtnComponent } from '../counter-btn/counter-btn.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CounterBtnComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

}
