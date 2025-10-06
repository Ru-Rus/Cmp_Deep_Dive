import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-tickests',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickests.component.html',
  styleUrls: ['./tickests.component.css', './tickets.component.scss']
})
export class TickestsComponent {

}
