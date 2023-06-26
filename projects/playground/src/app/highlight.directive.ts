import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: 'p[highlight]',
})

export class HighlightDirective {
    constructor(private elementRef: ElementRef<HTMLElement>) {
        // elementRef.nativeElement.addEventListener('mouseenter', ($event) => {
        //     this.onMouseEnter($event.clientX);
        // })
    }
    @HostListener('mouseenter', ['$event'])
    onMouseEnter(event: MouseEvent) {
        console.log('on est là !', event);
    }
}
