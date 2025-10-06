import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-tickests',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickests.component.html',
  styleUrl: './tickests.component.css'
})
export class TickestsComponent {

}
