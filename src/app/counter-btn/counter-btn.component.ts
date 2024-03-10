import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-btn',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './counter-btn.component.html',
  styleUrl: './counter-btn.component.scss'
})
export class CounterBtnComponent implements OnInit{
  @Input() containerName!: string;
  clickCount: Observable<number>;
  count:number = 0;
  constructor(private counterService: CounterService, private el: ElementRef ) {
        this.clickCount = this.counterService.getCounter()
  }
 
  ngOnInit() {
    this.clickCount.subscribe(res=>{
      const containerElement = this.el.nativeElement.closest('#' + this.containerName);
      this.count = res;
    })
  }
  onClick(): void {
   this.counterService.incrementCounter();
   if(this.count===10){
      document.getElementById(this.containerName)?.classList.add('red-background');
    }
   }
}
