/**
 * 图片地址输入
 * Created by Yun on 2017/2/20.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    templateUrl:'input-url-image.html',
    selector:'input-url-image'
})
export class InputUrlImage{
    @Input() label:string;
    @Input() url: string;

    @Output() urlChange = new EventEmitter<string>();

    inputChange(){
        this.urlChange.emit(this.url)
    }
}