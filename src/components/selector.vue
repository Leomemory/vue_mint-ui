<template>
    <div class="selector mint-cell">
        <mt-cell :title="label" @click.native="popupVisible = true" :class="value && value.length ? '' : 'space'" is-link>
            {{valueFormat}}
        </mt-cell>
        <mt-popup v-model="popupVisible" position="bottom">
            <div class="title">
                <mt-button type="default" size="small" @click="popupVisible=false">
                取消
                </mt-button>
                <mt-button type="primary" size="small" @click="confirm">
                确定
                </mt-button>
            </div>
            <mt-picker :slots="pickerOptions" ref="picker" @change="pickerChangeHandler" :valueKey="valueKey"></mt-picker>
        </mt-popup>
    </div>
</template>

<script>
export default {
    name:'selector',
    data(){
        return {
            popupVisible:false,
            currentValue: []
        }
    },
    props:{
        label:String,
        placeholder: {
            type: String,
            default: '请输入'
        },
        value: {
            type: Array,
            default: () => []
        },
        options: {
            type: Array,
            default: () => [],
            required: true
        },
        valueKey: {
            type: String,      //重要！！！
            default: 'value'
        }
    },
    computed:{
        valueFormat(){
            return this.value && this.value.length ? this.value.join(',') : this.placeholder
        },
        pickerOptions(){
            let cascadeIndex = 0,
                picker = this.$refs.picker
            while(true){
                const value = this.currentValue[cascadeIndex]
                if (!value) break
                const children = value.children
                if (!children) break
                cascadeIndex++
                picker.setSlotValues(cascadeIndex,children)
            }
            return this.options
        },
        pureValue() {
            return this.currentValue.map(item => {
                return typeof item === 'object' && item ? item.value : item
            })
        }
    },
    methods:{
        confirm(){
            this.$emit('confirm', this.pureValue)
            this.popupVisible = false
        },
        pickerChangeHandler(picker, values) {
            this.currentValue = values
        }
    }
}
</script>

<style lang="scss">
.selector {
  .mint-popup {
    width: 100%;
  }
  .title {
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }
  .mint-cell-title {
    flex: none;
    margin-right: 25px;
    color: #6b6b6b;
  }
  .mint-cell-value {
    color: #000;
  }
  .space .mint-cell-value{
      color: #ccc;
  }
}
</style>
