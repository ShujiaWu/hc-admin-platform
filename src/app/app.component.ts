/**
 * Created by Yun on 2016/11/10.
 */
import { Component } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.css';
import '../public/css/styles.css';
import '../public/css/icon.css';
import '../public/css/component.css';
import '../public/css/common.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [
        String(require('./app.component.css'))
    ]
})
export class AppComponent {
    public title: string = 'Hello Angular 2'
}
