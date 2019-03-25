import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {}

  @HostListener("click") onDoubleClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") ondblclick(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }
}
