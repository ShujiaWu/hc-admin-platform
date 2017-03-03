/**
 * Created by Yun on 2017/2/23.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ArticleService{
    constructor(
        private http:Http
    ){}
    /**
     * 获取文章分类
     */
    getArticleCategory(){
        return this.http.get('/api/article')
            .map((res) => {
                return res.json().list;
            }).catch((error:Response | any) =>{
                return Observable.throw(error);
            });
    }
    /**
     * 获取文章列表
     * @param category 分类名称
     */
    getArticleList(category:string){
        return this.http.get('/api/article/' + category)
            .map((res) => {
                return res.json().list;
            }).catch((error:Response | any) =>{
                return Observable.throw(error.json());
            });
    }
    /**
     * 获取文章内容
     * @param category 分类名称
     * @param fileName 文件名称
     */
    getArticleContent(category:string,fileName:string){
        return this.http.get('/api/article/' + category + '/' + fileName)
            .map((res) => {
                return res.json().result;
            }).catch((error:Response | any) =>{
                return Observable.throw(error.json());
            });
    }

    /**
     * 添加新分类
     * @param name 新分类名称
     */
    addNewCategory(name:string){
        return this.http.put('/api/article/' + name,{})
            .map((res) => {
                return res.json().categoryName;
            }).catch((error:Response | any) =>{
                return Observable.throw(error.json());
            });
    }

    /**
     * 修改分类名称
     * @param name 新分类名称
     * @param old 旧分类名称
     */
    modifyCategory(name:string,old:string){
        return this.http.post('/api/article/' + old,{
            newName:name
        }).map((res) => {
                return res.json();
            }).catch((error:Response | any) =>{
                return Observable.throw(error.json());
            });
    }

    /**
     * 删除分类
     * @param name 分类名称
     */
    deleteCategory(name:string){
        return this.http.delete('/api/article/' + name,{})
            .map((res) => {
                return res.json();
            }).catch((error:Response | any) =>{
                return Observable.throw(error.json());
            });
    }

    /**
     * 删除文章
     * @param category 分类名称
     * @param article 文章名称
     */
    deleteArticle(category:string,article:string){
        return this.http.delete('/api/article/'+category + '/' + article,{})
            .map((res) => {
                return res.json();
            }).catch((error:Response | any) =>{
                return Observable.throw(error.json());
            });
    }
}