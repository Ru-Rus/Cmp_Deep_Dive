import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css', './server-status.component.scss']
})
export class ServerStatusComponent {
  currentStatus = 'online';
}
