import { Component, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css', './control.component.scss' ]
})
export class ControlComponent {
  label = input.required <string>();

  //   image = input.required<{ src:string, alt:string }>();
  // title = input.required<string>();
}
