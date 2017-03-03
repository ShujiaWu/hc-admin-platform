/**
 * Created by Yun on 2017/2/15.
 */
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ArticleService } from "../../services/article-service";
@Component({
    templateUrl: 'content.html',
    styles: [
    ]
})

export class ContentComponent implements OnInit {
    category: string;
    article: string;
    content: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private articleService: ArticleService
    ) {
    }
    ngOnInit(): void {
        this.route.params.switchMap(
            (params: Params) => {
                console.log(params['category']);
                this.category = params['category'];
                this.article = params['filename'];
                return this.articleService.getArticleContent(params['category'], params['filename']);
            }).subscribe((result: string) => {
                this.content = result;
            }, (error) => {
            });

    }


}
