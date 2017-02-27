/**
 * 路由模块
 * Created by Yun on 2017/2/13.
 */
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

let routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {
}