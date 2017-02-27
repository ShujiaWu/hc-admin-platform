/**
 * 颜色选择
 * Created by Yun on 2017/2/20.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    templateUrl: 'input-color-picker.html',
    selector: 'input-color-picker'
})
export class InputColorPicker{
    @Input() label : string;
    @Input() color: string;
    @Output() colorChange = new EventEmitter<string>();

    selectChange($event:any){
        this.color = $event;
        this.colorChange.emit(this.color);
    }
}