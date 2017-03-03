/**
 * Created by Yun on 2017/2/14.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {UserRoutingModule} from "./user-routing.module";
import {AppCommonModule} from "../../app-common.module";
import {UserComponent} from "./user";
import {UserNavComponent} from "./user-nav";
import {ActionActivityConfigComponent} from "./actions/action-activity-config";
import {ActivityShareToFriendsConfigComponent} from "./actions/activity-config/share-to-friends";
import {ActivityActivitiesConfigComponent} from "./actions/activity-config/activities";
import {ActivityProductConfigComponent} from "./actions/activity-config/product";
import {ActivityDistributionConfigComponent} from "./actions/activity-config/distribution";
import {ActivityCooperationConfigComponent} from "./actions/activity-config/cooperation";
import {ClipboardModule} from "ngx-clipboard";
import {TabsModule} from "ng2-bootstrap";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        UserRoutingModule,
        ClipboardModule,
        AppCommonModule,
        TabsModule.forRoot()
    ],
    declarations:[
        //用户操作布局
        UserComponent,
        //导航
        UserNavComponent,

        //子组件
        ActionActivityConfigComponent,
        ActivityShareToFriendsConfigComponent,
        ActivityActivitiesConfigComponent,
        ActivityProductConfigComponent,
        ActivityDistributionConfigComponent,
        ActivityCooperationConfigComponent,
    ],
    providers:[]
})

export class UserModule{}