/**
 * Created by Yun on 2017/2/14.
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ArticlesRoutingModule } from "./articles-routing.module";
import { ArticleService } from "../../services/article-service";
import { HttpModule } from "@angular/http";
import { AppCommonModule } from "../../app-common.module";
import { FileUploadModule } from "ng2-file-upload";
import { ArticlesComponent } from "./articles";
import { CategoryComponent } from "./category";
import { ListComponent } from "./list";
import { ContentComponent } from "./content";
import { ModalModule, AlertModule } from "ng2-bootstrap";
import { InputNormal } from "../../component.common/input-normal";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AppCommonModule,
        ModalModule.forRoot(),
        AlertModule.forRoot(),
        ArticlesRoutingModule,
        FileUploadModule
    ],
    declarations: [
        ArticlesComponent,
        CategoryComponent,
        ListComponent,
        ContentComponent
    ],
    providers: [
        ArticleService
    ]
})

export class ArticlesModule { }