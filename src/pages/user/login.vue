<template>
    <div class="login">
        <div class="bg">
            <mt-field label="手机号" placeholder="请在此输入您的手机号" type="tel"
                        :attr="{maxlength: 11}"
                        v-model="form.phone"></mt-field>
            <captcha-field v-model="form.captcha" :phone="form.phone"></captcha-field>
        </div>        
        <div class="check" @click="agree = !agree">
            <span class="checkbox" :class="{'checked': agree}"></span>我已阅读并同意
        </div>

         <div style="margin: 50px 15px;">
            <mt-button type="primary" size="large" @click="next">登录</mt-button>
        </div>

    </div>
</template>

<script>
import CaptchaField from '@/components/captchaField'
export default {
    name:'login',
    components:{
        CaptchaField
    },
    data(){
        return{
            form: {
                phone:'',
                captcha:'',
            },
            agree: true
        }
    },
    methods:{
        next(){
            const {phone, captcha, captchaToken} = this.form
            if (!phone) {
                this.$toast('请先输入手机号')
                return
            }
            if(!captcha || captcha.length !== 4){
                this.$toast('请先输入正确的验证码')
                return
            }
            if (!this.agree) {
                this.$toast('请阅读并同意《用户服务协议》')
                return
            }
            console.log(this.form,this.agree)
            this.$router.push({name:"mall"})
        }
    }
}
</script>

<style lang="scss">
.login{
    .check{
        line-height: 30px;
        font-size: 12px;
        color: #4A4A4A;
        position: relative;
        margin: 10px 20px 0;
        padding-left: 20px;
        .checkbox{
            width: 16px;
            height: 16px;
            background-image: url(~@/assets/images/ic_login_n@2x.png);
            background-size: cover;
            display: block;
            position: absolute;
            top: 7px;
            left: -3px;
        }
        .checkbox.checked {
            background-image: url(~@/assets/images/ic_login_o@2x.png);
        }
    }
}
</style>
