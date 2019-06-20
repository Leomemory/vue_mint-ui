<template>
    <div class="login2">
        <!-- 提醒栏 -->
        <div class="tipslogin">
            <span>你需要登录才能继续仿问</span>
            <span class="closeSpan">关闭</span>
        </div>

        <!-- 操作区域 -->
        <div class="operateDiv">
            <!-- 账号 -->
            <mt-field v-show="isUserAccount"  :placeholder="accountPlaceholder"  v-model="uname" class="myinput"></mt-field>            
            <!-- 密码 -->
            <mt-field  v-show="isUserAccount" placeholder="请输入密码"  type="password" v-model="upass" class="myinput"></mt-field>
            
            <!-- 手机号 -->
            <mt-field v-show="!isUserAccount" placeholder="请输入手机号"  v-model="phone" class="myinput"></mt-field>
            <!-- 验证码 -->
            <mt-field v-show="!isUserAccount" placeholder="校验码" v-model="getCode" class="myinput">
                <span class="getCode">获取短信验证码</span>
            </mt-field>

             <!-- 免费注册块 -->
            <div class="registerDiv">
                <span>免费注册</span>
                <span v-show="forgetPassShowroNot">忘记密码</span>
            </div>

            <!-- 登录和切换登录方式块 -->
            <div>
                <mt-button size="large" class="mybutton" @click.native="login">登录</mt-button>
                <mt-button size="large"  type="primary" class="mybutton" @click.native="changeLoginMethod">{{defaultAccountText}}</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'login2',
    data(){
        return{
            // 默认的用户名
            uname:"",
            phone:"",
            // 默认的用户密码
            upass:"",
            // 是否显示忘记密码
            forgetPassShowroNot:true,
            // 默认的用户名默认值
            accountPlaceholder:"手机号/邮箱/会员名",
            // 是否是用户账户登录，默认是 true
            isUserAccount:true,
            // 默认短信验证码的值
            getCode:'',
            // 切换登录方式按钮默认显示的文本
            defaultAccountText:'短信验证码登录' ,
        }
    },
    methods:{
        login(){
            if(this.isUserAccount){
                if(!this.uname){
                    this.$messagebox('','请输入用户名');
                }else if(!this.upass){
                    this.$messagebox('','请输入密码');
                }
            }else{
                if(!this.phone){
                    this.$messagebox('','请输入手机号');
                }
            }
        },
        // 切换登录方式
        changeLoginMethod(){
            if(this.isUserAccount){
                this.defaultAccountText="账户密码登录"
                this.forgetPassShowroNot = false
            }else{
                this.defaultAccountText ="短信验证码登录"
                this.forgetPassShowroNot = true
            }
            this.isUserAccount = !this.isUserAccount ;
        }
    }
}
</script>

<style lang="scss">
.login2{
    .tipslogin {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 52px;
      background: rgb(238, 238, 238);
      padding-left: 20px;
      padding-right: 20px;
      /* 半闭样式 */
      .closeSpan {
          color: rgb(153, 153, 153)
      }
    }
    .operateDiv{
         padding-left: 20px;
         padding-right: 20px;
         .myinput {
            margin-top: 30px;
             .getCode {
                color:#ff5000;
                font-size: 17px;
                border-left:1px solid #b5b5b5;
                padding-left: 7px;
            }
         }
        .registerDiv {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span{
                color: #555;
            }
        }
        .mybutton {
            margin-top: 20px;
        }
    }
}
</style>
