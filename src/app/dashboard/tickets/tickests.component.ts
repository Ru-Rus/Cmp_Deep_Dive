import { Component } from "@angular/core";
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { interfaceTicket } from "./ticket.model";
import { Title } from "@angular/platform-browser";
import { tick } from "@angular/core/testing";
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: "app-tickests",
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: "./tickests.component.html",
  styleUrls: ["./tickests.component.css", "./tickets.component.scss"],
})
export class TickestsComponent {
  tickets: interfaceTicket[] = [];

  onAdd(ticketData:{title: string; text: string} ){

    const ticket: interfaceTicket ={
        title:ticketData.title,
        request:ticketData.text,
        id: 'qwertyuio' + Math.random().toString() + 'fgnjmk,l',
        status: 'open'
    }

    this.tickets.push(ticket);

  }

  onCloseTicket(id:string){
    this.tickets = this.tickets.map((ticket) =>{
      if(ticket.id === id){
        return {...ticket, status:'close'}
      }
      return ticket
    });
  }
}
