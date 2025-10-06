import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css', './server-status.component.scss']
})
export class ServerStatusComponent {
  currentStatus: 'online'|'offline'|'unknow' = 'online';

  constructor(){
    setInterval(() => {
      const RnD = Math.random();
      if(RnD < 0.5){
        this.currentStatus = 'offline';
      }
      else if (RnD > 0.9){
        this.currentStatus = 'online';
      }
      else{
        this.currentStatus = 'unknow';
      }
    },5000)
  }
}
