import { Component, contentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css', './control.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class ControlComponent {
  label = input.required <string>();
  private el = inject(ElementRef);
  //   image = input.required<{ src:string, alt:string }>();
  // title = input.required<string>();


  private control =
  contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick(){
    console.log('CLICK');
    console.log(this.el);
    console.log(this.control);
  }
}
