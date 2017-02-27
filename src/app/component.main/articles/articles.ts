/**
 * Created by Yun on 2017/2/15.
 */
import {Component, OnInit} from "@angular/core";
import 'jquery';
import {FileUploader, ParsedResponseHeaders, FileItem} from "ng2-file-upload";


@Component({
    templateUrl: 'articles.html',
    styles:[
        String(require('./articles.css'))
    ]
})

export class ArticlesComponent implements OnInit{
    uploader:FileUploader;
    ngOnInit(): void {
        this.uploader = new FileUploader({
            url: 'api/upload'
        });
        this.uploader.onSuccessItem = function(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders){
            console.log(response);
        }
    }


}
