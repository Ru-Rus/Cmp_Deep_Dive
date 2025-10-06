import { Component, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {
  label = input.required <string>();

  //   image = input.required<{ src:string, alt:string }>();
  // title = input.required<string>();
}
