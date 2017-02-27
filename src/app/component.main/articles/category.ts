/**
 * Created by Yun on 2017/2/14.
 */
import {Component, OnInit} from "@angular/core";
import {ArticleService} from "../../services/article-service";
@Component({
    templateUrl: 'category.html',
    selector: 'articles-category',
    // styleUrls :['./user-nav.component.css']
    //TODO:Fix the CSS fileUrl
    styles :[
        String(require('./category.css'))
    ]
})

export class CategoryComponent implements OnInit{

    categories:string[] = [];

    // getCategory
    constructor(private articleService:ArticleService){

    }
    ngOnInit(): void {
        let categories = this.articleService.getArticleCategory();
        let _categories = this.categories;
        categories.subscribe(function (result:string[]) {
            result.forEach(function (cValue, index, array) {
                _categories.push(cValue);
            });
        });


    }


}
