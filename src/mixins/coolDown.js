export default {
    data() {
        return {
            coolDown: -1
        }
    },
    methods:{
        startCoolDown({duration, interval = 1000, callback}){
            this.coolDown = duration
            this.interval = setInterval(() => {
                if(--this.coolDown<=0){
                    this.stopCoolDown()
                    callback && callback.call(this)
                }
            }, interval);
        },
        stopCoolDown(){
            clearInterval(this.interval)
        }
    },
    beforeDestroy() {
        this.stopCoolDown()
    }
}