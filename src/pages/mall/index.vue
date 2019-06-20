<template>
    <div class="mallIndex">
        <h3>picker使用<span>假期类型：{{value}}</span> <span>请假日期：{{date}}</span></h3>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>

        <br>
        
        <h3>城市选中三级联动</h3>
        <selector label="收货地址" placeholder="省市，城市，县" :value="selectedRegion" :options="regionOption" @confirm="selectedRegion = arguments[0]"></selector>
    </div>
</template>

<script>
import selector from '@/components/selector'
export default {
    name:"mallIndex",
    data(){
        return {
            value:"",
            date:"",
            slots:[
			    {
		          flex: 1,
		          values: ['年假', '事假', '病假', '婚假', '其他'],
		          className: 'slot1',
		          textAlign: 'center'
		        }, {
		          divider: true,
		          content: '-',
		          className: 'slot2'
		        }, {
		          flex: 1,
		          values: ['2015-11', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
		          className: 'slot3',
		          textAlign: 'center'
		        }
            ],
            
            region:[],
            form:{
                province: '',
                city: '',
                district: ''
            },
            selectedRegion:[]
        }
    },
    components:{
        selector
    },
    created(){
        this.getaddress()
    },
    methods:{
        onValuesChange(picker,values){
            // console.log(picker)
            console.log(values)
            this.value = values[0]
            this.date = values[1]
        },
        getaddress(){
            this.$axios.get("../../../static/region.json").then(res=>{
                console.log(res.data);
                this.region = res.data;
            })
        }
    },
    computed:{
        regionOption(){
            const region = this.region
            return [
                {
                    flex:1,
                    values: region
                },
                {
                    flex:1,
                    values: region[0]? region[0].children : []
                },
                {
                    flex:1,
                    values: region[0] && region[0].children[0] ? region[0].children[0].children : []
                }
            ]
        }
    },
    watch:{
        selectedRegion(val){
            const form = this.form
            if(!form) return
            [form.province, form.city, form.district] = val
        },
        form:{
            handler(form){
                if(form && form.province){
                    this.selectedRegion = [form.province, form.city, form.district]
                }
            },
            deep:true
        }
    }
}
</script>

<style lang="scss">
h3{
    font-size: 16px;
    margin: 0;
    display: flex;
    align-items: center;
    span{
        font-size: 12px;
        flex: 1;
        text-align: center;
    }
}
.mallIndex{

}
</style>
