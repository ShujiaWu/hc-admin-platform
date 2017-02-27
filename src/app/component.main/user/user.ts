/**
 * Created by Yun on 2017/2/15.
 */
import {Component} from "@angular/core";
@Component({
    templateUrl: './user.html',
    // styleUrls:['./user.component.css']
    //TODO:Fix the CSS fileUrl
    styles:[
        String(require('./user.css'))
    ]
})

export class UserComponent{}
