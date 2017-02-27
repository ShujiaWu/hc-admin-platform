/**
 * 通用模块
 * Created by Yun on 2017/2/24.
 */
import {NgModule} from "@angular/core";
import {SafeHtmlPipe} from "./pipe/safe-html.pipe";
import {CommonModule} from "@angular/common";
@NgModule({
    imports: [
       CommonModule
    ],
    declarations: [
        SafeHtmlPipe,
    ],
    exports: [
        SafeHtmlPipe,
    ],
    providers: [
    ]
})
export class AppCommonModule{

}