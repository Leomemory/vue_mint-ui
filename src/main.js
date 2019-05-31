// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//按需引入
import {
    Indicator,
    Toast,
    MessageBox,
    Button,
    Popup,
    Field,
    Lazyload,
    Picker,
    Radio,
    Checklist,
    Cell,
    InfiniteScroll,
    Spinner,
    Navbar,
    Tabbar,
    TabItem,
    TabContainer,
    TabContainerItem,
    Swipe,
    SwipeItem
} from 'mint-ui'

Vue.$indicator = Vue.prototype.$indicator = Indicator
Vue.$toast = Vue.prototype.$toast = Toast
MessageBox.setDefaults({
    title: '',
    zIndex: 5000
})
Vue.$messagebox = Vue.prototype.$messagebox = MessageBox
Vue.component(Button.name, Button)
Vue.component(Popup.name, Popup)
Vue.component(Field.name, Field)
Vue.use(Lazyload, {
    attempt: 3
})
Vue.component(Picker.name, Picker)
Vue.component(Radio.name, Radio)
Vue.component(Checklist.name, Checklist)
Vue.component(Cell.name, Cell)
Vue.use(InfiniteScroll)
Vue.component(Spinner.name, Spinner)
Vue.component(Navbar.name, Navbar)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
