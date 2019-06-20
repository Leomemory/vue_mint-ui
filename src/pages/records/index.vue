<template>
    <div class="recordsIndex">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <h3>{{msg}}</h3>
                <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" class="list">
                    <li v-for="item in list" :key="item.id">{{ item.title }}</li>
                </ul>
        
                <p v-if="loading" class="page-infinite-loading">
                    <mt-spinner type="fading-circle"></mt-spinner>
                    加载中...
                </p>	 
                <div class="no-more" v-if="noMore">亲，已经到底了哦！</div> 
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                ddd
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                fff
            </mt-tab-container-item>
        </mt-tab-container>
    </div> 
</template>

<script>
export default {
    name:"recordsIndex",
    data(){
        return {
            selected:'1',
             msg:"Infinite scroll上拉加载更多数据",
             loading:false,
             noMore: false,  //是否还有更多
             list:[],
             page:1
        }
    },
    created(){
        this.initData()
    },
    methods:{
        // loadMore() {
        //     this.requestData();
        // },
        // requestData(){
        //     var url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=' + this.page;
        //     this.$axios.get(url).then(response=>{
        //         console.log(response);
        //         //加载的数据要存入的list中
		// 		this.list = this.list.concat(response.data.result);
        //         ++this.page; //每次请求完成,页数加1
        //         //判断请求的是否有数据
        //         if(response.data.result.length < 20) {
        //             this.loading = true; //禁用请求
        //         } else {
        //             this.loading = false; //启用请求
        //         }
        //     }).catch(error=>{
        //         console.log(error)
        //     })
        // }

        initData(type){
            this.loading = true
            let url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=' + this.page;
            this.$axios.get(url).then(res=>{
                console.log(res.data.result)
                if(type==='loadMore'){
                    this.list = this.list.concat(res.data.result);
                }else{
                    this.list = res.data.result;
                }
                // 这里拿到总页数，可以用总的数量 / 一页的个数，然后向上取整
                this.loading = false;
                            
            }).catch(function(err) {
				console.log(err);
			})
        },
        loadMore(){
            this.page+=1;
            this.loading = true;
            if(this.page <= 7){
                //加载数据
                setTimeout(()=>{
                    this.initData('loadMore')
                },200)
            }else{ 
                this.noMore = true // 显示没有更多了
                this.loading = false // 关闭加载中
                return false
            }
        }
    }
}
</script>

<style scoped lang="scss">
ul,li{
    list-style: none;
}
.recordsIndex{
    overflow-y:hidden;
    padding-bottom: 50px;
    .list {
        margin-left: -40px;
        li {
            height: 50px;
            line-height: 50px;
            font-size: 15px;
            background-color: #fff;
            overflow: hidden;
            border-bottom: 1px #666 solid;
            padding-right: 10px;
            margin-left: 0px;
        }
    }
}
</style>
