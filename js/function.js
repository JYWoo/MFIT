new Vue({
	  el: '#test',
	  data: {
	    message: 'Hello Vue.js!'
	  }
	})
console.log("fuck");

// var Vue = require('vue');
// var VueRouter = require('vue-router');
// Vue.use(VueRouter);

var dailySign = Vue.extend({
	template: '<div id="DailySign"><div id="encourage"><img src="" alt="" class="encourage_pic"><p class="encourage_verse"></p></div><div id="didList"><h1 class="didList_tit">今日记录</h1><ul id="done_list"><li class="done_item"><p class="item_info"><img src="" alt="" class="plan_icon"><h2 class="plan_name">臀部塑形计划</h2></p></li></ul></div><div id="today_plan"><div class="plan_item"><img src="" alt="" class="plan_img"><span class="today_plan_name">柔韧训练组合</span></div></div></div>'
})

var conditionShow = Vue.extend({
	template:'<div id="ConditionShow"><p>肌肉页面</p></div>'
})
var App = Vue.extend({});
var router = new VueRouter();
router.map({
    '/dailySign': {
        component: dailySign
    },
    'conditionShow': {
        component: conditionShow
    }
})

router.start(App,'#test');

