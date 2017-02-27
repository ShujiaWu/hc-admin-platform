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
    getArticleCategory(){
        return this.http.get('/api/article')
            .map((res) => {
                return res.json().list;
            }).catch((error:Response | any) =>{
                return Observable.throw(error);
            });
    }
    getArticleList(category:string){
        return this.http.get('/api/article/' + category)
            .map((res) => {
                return res.json().list;
            }).catch((error:Response | any) =>{
                return Observable.throw(error);
            });
    }
    getArticleContent(category:string,fileName:string){
        return this.http.get('/api/article/' + category + '/' + fileName)
            .map((res) => {
                return res.json().result;
            }).catch((error:Response | any) =>{
                return Observable.throw(error);
            });
    }
}