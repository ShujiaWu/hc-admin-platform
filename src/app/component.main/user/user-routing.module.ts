/**
 * Created by Yun on 2017/2/14.
 */
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserComponent} from "./user";
import {ActionActivityConfigComponent} from "./actions/action-activity-config";

let routes : Routes = [
    {
        path:'user',
        component:UserComponent,
        children:[
            {
                path:'activity-config',
                component:ActionActivityConfigComponent
            }
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class UserRoutingModule {}