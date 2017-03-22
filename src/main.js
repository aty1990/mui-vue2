import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './config/router'
import jQuery from 'jquery'
import mui from 'assets/js/lib/mui'
import 'assets/css/lib/mui'
import 'assets/css/lib/style'


window.jQuery = window.$ = jQuery;
window.mui = mui;

const router = new VueRouter({
    routes
})

const initVue = function(){
	Vue.use(VueRouter)
	window.app = new Vue({ router }).$mount('#app')
}

mui.init({
	swipeBack:false, //关闭右滑关闭功能（默认就是false）
	keyEventBind: {
		backbutton: true  //开启back按键监听（默认就是true）
	},
	statusBarBackground: "#1981D8" //设置状态栏颜色,仅iOS可用
});

if(mui.os.plus) {
	mui.plusReady(function(){
		Object.assign(app.Config.device, {
			isAndroid : plus.os.name === "Android", 	//是否在安卓环境内
			isIOS : plus.os.name === "iOS", 			//是否在IOS环境内
			model: plus.device.model, 					//设备的型号
			imsi: plus.device.imsi, 					//设备的国际移动用户识别码 ,//Android - 2.2+ (支持): 如果设备没有插入SIM卡，则返回空数组。|iOS - 4.5+ (不支持): iOS设备不支持获取SIM卡信息，返回空数组。
			vendor: plus.device.vendor, 				// 设备的生产厂商
			uuid: plus.device.uuid, 					//设备的唯一标识
			version: plus.os.version, 					//系统版本信息
			osName: plus.os.name 						//系统的名称
		});
		initVue();
	});
} else {
	mui.ready(function() {
		initVue();
	});
}

