/**
 * Created by Yun on 2016/11/10.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import {AppCommonModule} from "./app-common.module";
import {AppRoutingModule} from "./app-routing.module";
import {UserRoutingModule} from "./component.main/user/user-routing.module";
import {UserModule} from "./component.main/user/user.module";
import {ArticlesModule} from "./component.main/articles/articles.module";
import {ArticlesRoutingModule} from "./component.main/articles/articles-routing.module";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppCommonModule,

        UserModule,
        ArticlesModule,

        UserRoutingModule,
        ArticlesRoutingModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
