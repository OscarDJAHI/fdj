import { Directive, ElementRef, HostListener } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  constructor(
    private SharedDataService: SharedDataService,
    private el: ElementRef) {
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: any) {
    const isClickedInside = this.el.nativeElement.contains(targetElement);
    if (!isClickedInside) {
      this.SharedDataService.clickOutside.emit(true);
    }
  }
}
