import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  host:{
    class: 'control'
  }
})
export class NewTicketComponent {
  onSubmit(title:string, text:string, form:HTMLFormElement){
    console.log(title);
    console.log(text);
    form.reset();
  }
}
