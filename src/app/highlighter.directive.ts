import { Directive,ElementRef,Input,HostListener } from '@angular/core';

@Directive({
    selector: '[highlight]'
})

export class HighLight {
    @Input() highLightColor

    constructor(public eleRef:ElementRef){
        console.log(eleRef);
    }
    @HostListener('mouseenter') mouseIn(){
        this.eleRef.nativeElement.style.backgroundColor='#FEE715FF';
        this.eleRef.nativeElement.style.padding='5px';
        this.eleRef.nativeElement.style.cursor='wait';

    }
    @HostListener('mouseleave') mouseOut(){
        this.eleRef.nativeElement.style.backgroundColor='';
    }

}