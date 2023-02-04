import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(value: any, type: string): SafeHtml | SafeScript | SafeStyle | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
        break;
      case 'style': return this.sanitizer.bypassSecurityTrustStyle(value)
        break
      default: throw new Error(`invalid: ${type}`);

        break;
    }
  }

}
