/**
 * Created by Yun on 2017/2/14.
 */
import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../../services/article-service";
import { Router, ActivatedRoute, Params } from "@angular/router";

declare let PNotify: any;
@Component({
    templateUrl: 'category.html',
    selector: 'articles-category',
    // styleUrls :['./user-nav.component.css']
    //TODO:Fix the CSS fileUrl
    styles: [
        String(require('./category.css'))
    ]
})

export class CategoryComponent implements OnInit {
    categories: string[] = [];
    newCategoryName: string;
    oldCategoryName: string;
    mode: number = 0;
    // getCategory
    constructor(
        private articleService: ArticleService,
        private router: Router,
        private route: ActivatedRoute,
    ) {

    }
    ngOnInit(): void {
        let categories = this.articleService.getArticleCategory();
        let _categories = this.categories;
        categories.subscribe(function (result: string[]) {
            result.forEach(function (cValue, index, array) {
                _categories.push(cValue);
            });
        });
    }

    addNewCategory(): any {
        this.articleService.addNewCategory(this.newCategoryName).subscribe((res) => {
            this.categories.push(res);
            new PNotify({
                title: '操作成功',
                text: '添加新分类成功！',
                type: 'success'
            });
        }, (res) => {
            new PNotify({
                title: '操作失败',
                text: '添加新分类失败！',
                type: 'error'
            });
        });
    }

    /**
     * 修改分类名称
     */
    modifyCategory(): any {
        this.articleService.modifyCategory(this.newCategoryName, this.oldCategoryName).subscribe((res) => {
            this.categories.forEach(function (value, index, array) {
                if (value == res.oldCategory) {
                    array[index] = res.newCategory
                }
            });
            new PNotify({
                title: '操作成功',
                text: '修改新分类成功！',
                type: 'success'
            });

            // 修改完成后如果当前处在该分类上则刷新
            this.route.firstChild.params.subscribe(params => {
                if (params['category'] == res.oldCategory) {
                    this.router.navigate(['/articles', res.newCategory]);
                }
            });
        }, (res) => {
            console.log(res);
            new PNotify({
                title: '操作失败',
                text: res.message,
                type: 'error'
            });
        });
    }
    deleteCategory(): any {
        this.articleService.deleteCategory(this.oldCategoryName).subscribe((res) => {
            this.categories.forEach(function (value, index, array) {
                if (value == res.category) {
                    array.splice(index, 1);
                }
            });
            new PNotify({
                title: '删除',
                text: '删除分类成功！',
                type: 'success'
            });

            // 修改完成后如果当前处在该分类上则刷新
            this.route.firstChild.params.subscribe(params => {
                if (params['category'] == res.category) {
                    this.router.navigate(['/articles']);
                }
            });
        }, (res) => {
            console.log(res);
            new PNotify({
                title: '操作失败',
                text: res.message,
                type: 'error'
            });
        });
    }

    categoryItemModifyClick($event: Event, item: any): any {
        this.mode = 1;
        this.oldCategoryName = this.newCategoryName = item;
        $event.stopPropagation();
        $event.preventDefault()
    }
}
