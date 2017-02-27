/**
 * Created by Yun on 2017/2/20.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    templateUrl:'input-normal.html',
    selector:'input-normal'
})
export class InputNormal{
    @Input() label:string;
    @Input() placeholder:string;
    @Input() type:string;
    @Input() value:string;
    @Input() pattern:RegExp;
    @Input() required:boolean;

    @Output() valueChange = new EventEmitter<string>();


    //输入框值变化
    inputValueChange(event:any){
        this.value = event;
        this.valueChange.emit(this.value);
    }
}