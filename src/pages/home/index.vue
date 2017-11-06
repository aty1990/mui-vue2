<template>
	<div class="page-button">
		{{text}} 
		<input type="button" name="" value="click" @tap="emitFn">
		<div id="div">点击div</div>

		<router-link to="/hello">hello.page</router-link>

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
	import 'assets/js/lib/particles.min'
	/*import 'assets/js/home/home'*/
    export default {
    	name: 'page-index',
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
			var gallery = mui('.mui-slider');

			gallery.slider({
			  interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
			});


			var TouchSlider = require('touchslider');

			var t11=new TouchSlider('slider1',{duration:800, interval:3000, direction:0, autoplay:true, align:'left', mousewheel:false, mouse:true, fullsize:false});

			particlesJS('app',{
			    "particles": {
			      "number": {
			        "value": 80,
			        "density": {
			          "enable": true,
			          "value_area": 800
			        }
			      },
			      "color": {
			        "value": "#ffffff"
			      },
			      "shape": {
			        "type": "circle",
			        "stroke": {
			          "width": 0,
			          "color": "#000000"
			        },
			        "polygon": {
			          "nb_sides": 5
			        },
			        "image": {
			          "src": "img/github.svg",
			          "width": 150,
			          "height": 150
			        }
			      },
			      "opacity": {
			        "value": 0.7,
			        "random": false,
			        "anim": {
			          "enable": false,
			          "speed": 1,
			          "opacity_min": 0.1,
			          "sync": false
			        }
			      },
			      "size": {
			        "value": 6,
			        "random": true,
			        "anim": {
			          "enable": false,
			          "speed": 40,
			          "size_min": 0.1,
			          "sync": false
			        }
			      },
			      "line_linked": {
			        "enable": true,
			        "distance": 150,
			        "color": "#ffffff",
			        "opacity": 0.4,
			        "width": 1
			      },
			      "move": {
			        "enable": true,
			        "speed": 6,
			        "direction": "none",
			        "random": false,
			        "straight": false,
			        "out_mode": "out",
			        "attract": {
			          "enable": false,
			          "rotateX": 600,
			          "rotateY": 1200
			        }
			      }
			    },
			    "interactivity": {
			      "detect_on": "canvas",
			      "events": {
			        "onhover": {
			          "enable": true,
			          "mode": "repulse"
			        },
			        "onclick": {
			          "enable": false,
			          "mode": "push"
			        },
			        "resize": true
			      },
			      "modes": {
			        "grab": {
			          "distance": 400,
			          "line_linked": {
			            "opacity": 1
			          }
			        },
			        "bubble": {
			          "distance": 400,
			          "size": 40,
			          "duration": 2,
			          "opacity": 8,
			          "speed": 3
			        },
			        "repulse": {
			          "distance": 200
			        },
			        "push": {
			          "particles_nb": 4
			        },
			        "remove": {
			          "particles_nb": 2
			        }
			      }
			    },
			    "retina_detect": true,
			    "config_demo": {
			      "hide_card": false,
			      "background_color": "#36F0C1",
			      "background_image": "",
			      "background_position": "50% 50%",
			      "background_repeat": "no-repeat",
			      "background_size": "cover"
			    }
			  }

			);

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