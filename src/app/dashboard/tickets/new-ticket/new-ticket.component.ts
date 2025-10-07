import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
} from "@angular/core";
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-new-ticket",
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: "./new-ticket.component.html",
  styleUrl: "./new-ticket.component.css",
  host: {
    class: "control",
  },
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  //@ViewChild("formElement") private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>("formElement");

  // @Output() add = new EventEmitter<{title: string; text: string}>();
  add = output<{title: string; text: string}>();




  ngOnInit() {
    console.log("ON INIT");
  }

  ngAfterViewInit() {
    console.log("AFTER VIEW INIT");
    console.log(this.form().nativeElement);
  }

  onSubmit(title: string, text: string) {
    // console.log(title);
    // console.log(text);
    // // this.form?.nativeElement.reset();
    this.add.emit({title: title, text:text})
    this.form()?.nativeElement.reset();
  }
}
