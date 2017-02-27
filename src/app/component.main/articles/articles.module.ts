/**
 * Created by Yun on 2017/2/14.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ArticlesRoutingModule} from "./articles-routing.module";
import {ArticleService} from "../../services/article-service";
import {HttpModule} from "@angular/http";
import {AppCommonModule} from "../../app-common.module";
import {FileUploadModule} from "ng2-file-upload";
import {ArticlesComponent} from "./articles";
import {CategoryComponent} from "./category";
import {ListComponent} from "./list";
import {ContentComponent} from "./content";
// import {SafeHtmlPipe} from "../../pipe/safe-html.pipe";
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        HttpModule,
        ArticlesRoutingModule,
        AppCommonModule,
        FileUploadModule
    ],
    declarations:[
        // SafeHtmlPipe,
        ArticlesComponent,
        CategoryComponent,
        ListComponent,
        ContentComponent
    ],
    providers:[
        ArticleService
    ]
})

export class ArticlesModule{}