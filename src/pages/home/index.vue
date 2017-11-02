<template>
	<div class="page-button">
		{{text}} 
		<input type="button" name="" value="click" @tap="emitFn">
		<div id="div">点击div</div>
		<i class="bg-1 app-icon"></i>
		<i class="bg-2 app-icon"></i>
		<i class="bg-3 app-icon"></i>


		<div id="sheet1" class="mui-popover mui-popover-bottom mui-popover-action ">
		    <!-- 可选择菜单 -->
		    <ul class="mui-table-view">
		      <li class="mui-table-view-cell">
		        <a href="#">菜单1</a>
		      </li>
		      <li class="mui-table-view-cell">
		        <a href="#">菜单2</a>
		      </li>
		    </ul>
		    <!-- 取消菜单 -->
		    <ul class="mui-table-view">
		      <li class="mui-table-view-cell">
		        <a href="#sheet1"><b>取消</b></a>
		      </li>
		    </ul>

		</div>

		<div class="mui-slider">
		  <div class="mui-slider-group mui-slider-loop">
		    <!--支持循环，需要重复图片节点-->
		    <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="../../assets/images/4.jpg" /></a></div>
		    <div class="mui-slider-item"><a href="#"><img src="../../assets/images/1.jpg" /></a></div>
		    <div class="mui-slider-item"><a href="#"><img src="../../assets/images/2.jpg" /></a></div>
		    <div class="mui-slider-item"><a href="#"><img src="../../assets/images/3.jpg" /></a></div>
		    <div class="mui-slider-item"><a href="#"><img src="../../assets/images/4.jpg" /></a></div>
		    <!--支持循环，需要重复图片节点-->
		    <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="../../assets/images/1.jpg" /></a></div>
		  </div>
		</div>



		<div class='swipe' style='margin:10px;'>
		  <ul id='slider1'>
		    <li><div>2</div></li>
		    <li><div>3</div></li>
		    <li><div>4</div></li>
		    <li><div>5</div></li>
		    <li><div>5</div></li>
		    <li><div>5</div></li>
		    <li><div>5</div></li>
		    <li><div>5</div></li>
		    <li></li>
		  </ul>
		</div>


	</div>
</template>
<script>
    export default {
    	name: 'page-hello',
        data() {
			return {
				text : "index"
			}
		},
		mounted(){
			// 事件绑定
			$("body").on("tap","#div",function(){
				alert(this.innerHTML);
			});

			//获得slider插件对象
			/*var gallery = mui('.mui-slider');

			gallery.slider({
			  interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
			});
*/

			var TouchSlider = require('touchslider');

			var t11=new TouchSlider('slider1',{duration:800, interval:3000, direction:0, autoplay:true, align:'left', mousewheel:false, mouse:true, fullsize:false});

		},
		methods: {
           	emitFn (){
           		this.alertText()
           		mui('#sheet1').popover('toggle');
           	},
           	alertText () {
           		mui.toast('123213');
           	}
		}
    }
</script>
<style scoped>
	
</style>