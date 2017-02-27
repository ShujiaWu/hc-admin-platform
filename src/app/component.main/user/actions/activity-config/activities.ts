/**
 * Created by Yun on 2017/2/16.
 */
import {Component, OnInit} from "@angular/core";

@Component({
    selector : 'activity-activities-config',
    templateUrl : 'activities.html',
    // styleUrls : []
    styles:[
        String(require('./share-to-friends.css'))
    ]
})



export class ActivityActivitiesConfigComponent implements OnInit{
    ngOnInit(): void {
    }
    //预览的初始位置
    previewPos = 0;
    pageConfig = {
        mainImage : '//img1.huocaicf.com/act/activityCenter/201606211508.png',
        reason:'//img1.huocaicf.com/act/activityCenter/201605261747.png',
        mainBgColor:'#6bd6ef',
        mainBtnStyle:{
            background:'#fef330',
            color:'#6d2712'
        },
        linkColor:'#ff6a36',
        buttons: '领取礼包,注册,完成,登录',
        loginSuccess:{
            type:'1',
            bgColor: '#D1ECF7',
            content:'<p class="text-16">致亲爱的老用户：</p><p class="text-14 margin-t-10">1、<span style="color: #ff6022;font-weight: bold;">新用户</span>才可以领取礼包哦</p><p class="text-14 margin-t-5">2、您可以<span style="color: #ff9f22;font-weight: bold;">发送推荐有礼</span>获得更大礼包哦</p>',
            btnStyle1:{
                background:'#FF9F22',
                color:'#FFFFFF'
            },
            btnStyle2:{
                background:'#FF9F22',
                color:'#FFFFFF'
            },
            target: {
                type: '1',
                url: 'recommendation',
                params: '',
                replace: '0'
            }
        },
        registerSuccess: {
            type: '1',
            bgColor: '#D1ECF7',
            bgImage: '//img1.huocaicf.com/act/activityCenter/201605231354.png',
            target: {
                type: '1',
                url: '',
                params: '',
                replace: '0'
            }
        }

    };
    getConfig(){
        let config = {
            mainImage : this.pageConfig.mainImage,
            reason:this.pageConfig.reason,
            mainBgColor:this.pageConfig.mainBgColor,
            mainBtnStyle: 'background:' + this.pageConfig.mainBtnStyle.background + ';color:' + this.pageConfig.mainBtnStyle.color,
            loginSuccess:{
                isNeed: this.pageConfig.loginSuccess.type == '1',
                bgColor:this.pageConfig.loginSuccess.bgColor,
                content:this.pageConfig.loginSuccess.content,
                btnStyle0: 'background:' + this.pageConfig.loginSuccess.btnStyle1.background +';color:' + this.pageConfig.loginSuccess.btnStyle1.color,
                btnStyle1: 'background:' + this.pageConfig.loginSuccess.btnStyle2.background +';color:' + this.pageConfig.loginSuccess.btnStyle2.color,
                target: {
                    type: +this.pageConfig.loginSuccess.target.type,
                    url: this.pageConfig.loginSuccess.target.url,
                    params: this.pageConfig.loginSuccess.target.params,
                    replace: this.pageConfig.loginSuccess.target.replace != '0'
                }
            },
            registerSuccess: {
                bgColor: this.pageConfig.registerSuccess.bgColor,
                bgImage: this.pageConfig.registerSuccess.bgImage,
                isNeed: this.pageConfig.registerSuccess.type == '1',
                target: {
                    type: +this.pageConfig.registerSuccess.target.type,
                    url: this.pageConfig.registerSuccess.target.url,
                    param: this.pageConfig.registerSuccess.target.params,
                    replace: this.pageConfig.registerSuccess.target.replace != '0'
                }
            }


        };
        //按钮文字
        if(this.pageConfig.buttons && this.pageConfig.buttons.length>0){
            config['buttons'] = this.pageConfig.buttons.split(',');
        }

        return JSON.stringify(config,null,4);
    }

}