/**
 * 提供商
 * Created by Yun on 2016/11/10.
 */
// Angular 核心
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
// RxJS
import 'rxjs';
// 这里导入其他的库文件
// You can import js, ts, css, sass, ...
// import 'jquery';

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// 代码美化
import 'code-prettify/loader/prettify.css';

// PNotify
import 'pnotify/dist/pnotify.js'
import 'pnotify/dist/pnotify.buttons.js'
import 'pnotify/dist/pnotify.animate.js'
import 'pnotify/dist/pnotify.css'
import 'pnotify/dist/pnotify.buttons.css'
import 'pnotify/dist/pnotify.brighttheme.css'
declare let PNotify: any;
PNotify.prototype.options.styling = "bootstrap3";


