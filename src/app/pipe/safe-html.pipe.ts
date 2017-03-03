/**
 * Created by Yun on 2017/2/21.
 */
import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe {
    constructor(private sanitizer: DomSanitizer) { }

    transform(value: any) {
        // return value;
        return this.sanitizer.bypassSecurityTrustHtml(value);
        // return this.sanitizer.bypassSecurityTrustHtml(style);
        // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
        //https://angular.io/docs/ts/latest/api/platform-browser/index/DomSanitizer-class.html
    }
}