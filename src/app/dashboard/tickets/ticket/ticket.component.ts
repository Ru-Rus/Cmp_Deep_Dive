import { Component, input, output, signal } from '@angular/core';
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
  close = output();

  onToggleDetails(){
    this.dataVisible.update((wasVisible)=> !wasVisible);
  }

  onMarkAsDone(){
    this.close.emit();
  }
}
