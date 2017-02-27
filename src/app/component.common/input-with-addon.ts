/**
 * Created by Yun on 2017/2/20.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    templateUrl:'input-with-addon.html',
    selector:'input-with-addon'
})
export class InputWithAddon{
    @Input() label:string;
    @Input() lAddon : string;
    @Input() rAddon : string;
    @Input() placeholder:string;
    @Input() hasSwitch:boolean;
    @Input() isSelected:boolean;
    @Input() value:string;
    @Input() pattern:RegExp;

    @Output() isSelectedChange = new EventEmitter<boolean>();
    @Output() valueChange = new EventEmitter<string>();

    //复选框改变
    selectedChange(){
        this.isSelected = !this.isSelected;
        this.isSelectedChange.emit(this.isSelected);
    }

    //输入框值变化
    inputValueChange(event:any){
        this.value = event;
        this.valueChange.emit(this.value);
    }
}