/**
 * Created by Yun on 2017/2/14.
 */
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ArticlesComponent } from "./articles";
import { ListComponent } from "./list";
import { ContentComponent } from "./content";

let routes: Routes = [
    {
        path: 'articles',
        component: ArticlesComponent,
        children: [
            {
                path: ':category',
                component: ListComponent
            },
            {
                path: ':category/:filename',
                component: ContentComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ArticlesRoutingModule { }