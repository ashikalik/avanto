import {
  Directive,
  Attribute,
  Renderer2,
  ElementRef,
  HostListener,
  Inject
} from "@angular/core";
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: "[defaultImage]"
})
export class DefaultImageBannerDirective {
  private defaultEnglishImage: string = "/assets/img/evento-logo-en.png";
  private defaultArabicImage: string = "/assets/img/evento-logo-ar.png";
  constructor(
    // @Attribute('loader') public loader: string,
    // @Attribute('onErrorSrc') public onErrorSrc: string,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    
    if(this.document.documentElement.lang === 'ar')
    this.renderer.setAttribute(this.el.nativeElement, "src", this.defaultArabicImage);
    else
    this.renderer.setAttribute(this.el.nativeElement, "src", this.defaultEnglishImage);
  }

  @HostListener("load") onLoad() {
    this.renderer.setAttribute(
      this.el.nativeElement,
      "src",
      this.el.nativeElement.src
    );
  }
  @HostListener("error") onError() {
    if(this.document.documentElement.lang === 'ar')
    this.renderer.setAttribute(this.el.nativeElement, "src", this.defaultArabicImage);
    else
    this.renderer.setAttribute(this.el.nativeElement, "src", this.defaultEnglishImage);
  }
}
