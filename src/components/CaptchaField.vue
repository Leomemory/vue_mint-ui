<template>
    <div class="captcha-field">
        <mt-field label="验证码" placeholder="请输入验证码" type="tel" v-model="currentValue"                
                :attr="{maxlength: maxlength}">
            <mt-button type="primary" size="small"
                :disabled="coolDown > 0"
                @click="sendCaptcha()">{{coolDownMsg}}</mt-button>
        </mt-field>
    </div>
</template>

<script>
import coolDownMixin from '@/mixins/coolDown'
export default {
    name:'captcha-field',
    mixins: [coolDownMixin],
    props:{
        phone: {
            type: String
        },
        maxlength:{
            type: Number,
            default: 4
        },
        duration: {
            type: Number,
            default: 60
        }
    },
    data(){
        return {
            currentValue:''
        }
    },
    watch:{
        currentValue(val) {
            console.log(val)
            this.$emit('input', val)
        }
    },
    computed:{
        coolDownMsg(){
            return this.coolDown<=0 ? '获取验证码' : `请稍后(${this.coolDown}s)`
        }
    },
    methods:{
        sendCaptcha(){
            if ( !this.phone || this.phone.length !==11) {
                this.$toast('请输入的手机号')
                return
            }
            this.$toast('发送成功')
            this.startCoolDown({
                duration: this.duration
            })
            console.log('sendCaptcha')
        }
    }
}
</script>

<style lang="scss">

</style>
