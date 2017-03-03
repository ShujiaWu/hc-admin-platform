/**
 * Created by Yun on 2017/2/15.
 */
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ArticleService } from "../../services/article-service";
import { FileUploader, FileItem, ParsedResponseHeaders } from "ng2-file-upload";

declare let PNotify: any;
@Component({
    templateUrl: 'list.html',
    styles: [
        String(require('./list.css'))
    ]
})

export class ListComponent implements OnInit {
    category: string;
    fileList: string[];
    result: boolean = true;
    errorMessage: string = '';
    uploader: FileUploader;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private articleService: ArticleService
    ) {
    }
    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.category = params['category'];
            this.uploader = new FileUploader({
                url: 'api/upload/' + this.category,
                removeAfterUpload: true
            });
            this.getArticleList(false);
        });
        this.uploader.onSuccessItem = function (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) {
            new PNotify({
                title: '上传成功',
                text: item.file.name + '上传成功！',
                type: 'success'
            });
        };
        let _that = this;
        this.uploader.onCompleteAll = function () {
            _that.getArticleList(false);
        }
    }

    /**
     * 获取文章列表
     */
    getArticleList(isShowNotify: boolean): void {
        this.articleService.getArticleList(this.category).subscribe((result: any[]) => {
            this.fileList = result;
            this.result = true;
            if (isShowNotify) {
                new PNotify({
                    title: '操作成功',
                    text: '刷新文章列表成功！',
                    type: 'success'
                });
            }
        }, (result) => {
            this.fileList = [];
            this.result = false;
            this.errorMessage = result.json().message;
        });
    }

    deleteArticle(article: string): any {
        this.articleService.deleteArticle(this.category, article).subscribe((res) => {
            this.fileList.forEach(function (value, index, array) {
                if (value == res.article) {
                    array.splice(index, 1);
                }
            });
            new PNotify({
                title: '删除',
                text: '删除文章成功！',
                type: 'success'
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
}
