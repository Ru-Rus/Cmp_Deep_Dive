import { Component, input, signal } from '@angular/core';
import { interfaceTicket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<interfaceTicket>();
  dataVisible = signal(false);

  onToggleDetails(){
    this.dataVisible.update((wasVisible)=> !wasVisible);
  }
}
