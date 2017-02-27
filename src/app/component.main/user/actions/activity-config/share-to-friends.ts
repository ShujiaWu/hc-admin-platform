/**
 * Created by Yun on 2017/2/16.
 */
import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";

@Component({
    selector : 'activity-share-to-friends-config',
    templateUrl : 'share-to-friends.html',
    // styleUrls : []
    styles:[
        String(require('./share-to-friends.css'))
    ]
})



export class ActivityShareToFriendsConfigComponent implements OnInit{
    ngOnInit(): void {
    }
    //预览的初始位置
    previewPos = 0;
    pageConfig = {
        mainImage : '//img1.huocaicf.com/act/banner/201702061156_01.png',
        reason:'//img1.huocaicf.com/product/201702161828_02.jpg',
        userNamePosStyle:{
            top:{
                isSelected:true,
                value:57
            },
            right:{
                isSelected:true,
                value:70
            },
            bottom:{
                isSelected:false,
                value:0
            },
            left:{
                isSelected:false,
                value:0
            },
            fontSize:{
                isSelected:true,
                value:16
            },
            lineHeight:{
                isSelected:true,
                value:28
            },
            width:{
                isSelected:true,
                value:80
            },
            height:{
                isSelected:true,
                value:28
            },
            color:'#FFFFFF'
        },
        mainBgColor:'#FFFFFF',
        mainBtnStyle:{
            background:'#fef330',
            color:'#6d2712'
        },
        linkColor:'#ff6a36',
        buttons: '领取礼包,注册,完成,登录',
        loginSuccess:{
            type:'0',
            bgColor: '#FCF47D',
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
            bgColor: '#fc5353',
            bgImage: '//img1.huocaicf.com/act/activityCenter/201606241839.png',
            target: {
                type: '1',
                url: '',
                params: '',
                replace: '0'
            }
        }

    };
    getUserNamePos(){
        let pos={
            color: this.pageConfig.userNamePosStyle.color
        };
        // 上
        if(this.pageConfig.userNamePosStyle.top.isSelected
            && this.pageConfig.userNamePosStyle.top.value!=null){
            pos['top'] = this.pageConfig.userNamePosStyle.top.value + 'px';
        }
        // 右
        if(this.pageConfig.userNamePosStyle.right.isSelected
            && this.pageConfig.userNamePosStyle.right.value!=null){
            pos['right'] = this.pageConfig.userNamePosStyle.right.value + 'px';
        }
        // 下
        if(this.pageConfig.userNamePosStyle.bottom.isSelected
            && this.pageConfig.userNamePosStyle.bottom.value!=null){
            pos['bottom'] = this.pageConfig.userNamePosStyle.bottom.value  + 'px';
        }
        // 左
        if(this.pageConfig.userNamePosStyle.left.isSelected
            && this.pageConfig.userNamePosStyle.left.value!=null){
            pos['left'] = this.pageConfig.userNamePosStyle.left.value + 'px';
        }
        // 字体大小
        if(this.pageConfig.userNamePosStyle.fontSize.isSelected
            && this.pageConfig.userNamePosStyle.fontSize.value!=null){
            pos['fontSize'] = this.pageConfig.userNamePosStyle.fontSize.value + 'px';
        }
        // 行高
        if(this.pageConfig.userNamePosStyle.lineHeight.isSelected
            && this.pageConfig.userNamePosStyle.lineHeight.value!=null){
            pos['lineHeight'] = +this.pageConfig.userNamePosStyle.lineHeight.value + 'px';
        }
        // 宽
        if(this.pageConfig.userNamePosStyle.width.isSelected
            && this.pageConfig.userNamePosStyle.width.value!=null){
            pos['width'] = +this.pageConfig.userNamePosStyle.width.value + 'px';
        }
        // 高
        if(this.pageConfig.userNamePosStyle.height.isSelected
            && this.pageConfig.userNamePosStyle.height.value!=null){
            pos['height'] = +this.pageConfig.userNamePosStyle.height.value + 'px';
        }
        return pos;
    }
    getConfig(){
        // this.loadData(this.pageConfig.loginSuccess.content);
        let config = {
            mainImage : this.pageConfig.mainImage,
            reason:this.pageConfig.reason,
            userNamePosStyle:{
                color: this.pageConfig.userNamePosStyle.color
            },
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
        // 上
        if(this.pageConfig.userNamePosStyle.top.isSelected
            && this.pageConfig.userNamePosStyle.top.value!=null){
            config.userNamePosStyle['top'] = +this.pageConfig.userNamePosStyle.top.value;
        }
        // 右
        if(this.pageConfig.userNamePosStyle.right.isSelected
            && this.pageConfig.userNamePosStyle.right.value!=null){
            config.userNamePosStyle['right'] = +this.pageConfig.userNamePosStyle.right.value;
        }
        // 下
        if(this.pageConfig.userNamePosStyle.bottom.isSelected
            && this.pageConfig.userNamePosStyle.bottom.value!=null){
            config.userNamePosStyle['bottom'] = +this.pageConfig.userNamePosStyle.bottom.value;
        }
        // 左
        if(this.pageConfig.userNamePosStyle.left.isSelected
            && this.pageConfig.userNamePosStyle.left.value!=null){
            config.userNamePosStyle['left'] = +this.pageConfig.userNamePosStyle.left.value;
        }
        // 字体大小
        if(this.pageConfig.userNamePosStyle.fontSize.isSelected
            && this.pageConfig.userNamePosStyle.fontSize.value!=null){
            config.userNamePosStyle['fontSize'] = +this.pageConfig.userNamePosStyle.fontSize.value;
        }
        // 行高
        if(this.pageConfig.userNamePosStyle.lineHeight.isSelected
            && this.pageConfig.userNamePosStyle.lineHeight.value!=null){
            config.userNamePosStyle['lineHeight'] = +this.pageConfig.userNamePosStyle.lineHeight.value;
        }
        // 宽
        if(this.pageConfig.userNamePosStyle.width.isSelected
            && this.pageConfig.userNamePosStyle.width.value!=null){
            config.userNamePosStyle['width'] = +this.pageConfig.userNamePosStyle.width.value;
        }
        // 高
        if(this.pageConfig.userNamePosStyle.height.isSelected
            && this.pageConfig.userNamePosStyle.height.value!=null){
            config.userNamePosStyle['height'] = +this.pageConfig.userNamePosStyle.height.value;
        }
        //按钮文字
        if(this.pageConfig.buttons && this.pageConfig.buttons.length>0){
            config['buttons'] = this.pageConfig.buttons.split(',');
        }

        return JSON.stringify(config,null,4);
    }

    @ViewChild('dataContainer') dataContainer: ElementRef;

    loadData(data:any) {
        this.dataContainer.nativeElement.innerHTML = data;
    }

}