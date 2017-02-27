/**
 * Created by Yun on 2017/2/15.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {ArticleService} from "../../services/article-service";
@Component({
    templateUrl: 'list.html',
    styles:[
        String(require('./list.css'))
    ]
})

export class ListComponent implements OnInit{
    category:string;
    fileList:string[];
    result:boolean = true;
    errorMessage:string = '';
    constructor(
        private route:ActivatedRoute,
        private router:Router,
        private articleService:ArticleService
    ){
    }
    ngOnInit(): void {
        this.getArticleList();

        // this.route.params.subscribe(params=>{
        //     console.log(params);
        // });

    }

    /**
     * 获取文章列表
     */
    getArticleList():void{
        this.route.params.switchMap(
            (params:Params)=> {
                this.category = params['category'];
                return this.articleService.getArticleList(this.category);
            }).subscribe((result:any[])=>{
            this.fileList = result;
            this.result = true;
        },(result)=>{
            this.result = false;
            this.errorMessage = result.json().message;
        });
    }


}
