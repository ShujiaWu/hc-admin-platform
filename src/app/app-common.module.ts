/**
 * 通用模块
 * Created by Yun on 2017/2/24.
 */
import { NgModule } from "@angular/core";
import { SafeHtmlPipe } from "./pipe/safe-html.pipe";
import { CommonModule } from "@angular/common";
import { InputColorPicker } from "./component.common/input-color-picker";
import { InputUrlImage } from "./component.common/input-url-image";
import { InputWithAddon } from "./component.common/input-with-addon";
import { InputNormal } from "./component.common/input-normal";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        SafeHtmlPipe,
        InputColorPicker,
        InputUrlImage,
        InputWithAddon,
        InputNormal,
    ],
    exports: [
        SafeHtmlPipe,

        InputColorPicker,
        InputUrlImage,
        InputWithAddon,
        InputNormal,
    ],
    providers: [
    ]
})
export class AppCommonModule {

}