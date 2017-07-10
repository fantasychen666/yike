/*
* @Author: Administrator
* @Date:   2017-07-10 11:06:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-10 18:48:14
*/
//app.js是整个angularjs应用程序的入口



	var yike = angular.module("yike",["ngRoute","controllers"]);
	//定义toggle方法
	//$(function(){})  
	//yike刚被创建，就和根目录绑定一个toggle方法
	
	
	yike.run(["$rootScope",function($rootScope) {
		//往$rootScope上绑定toggle方法
		$rootScope.collapsed = false;
		$rootScope.ismenu = true;
		$rootScope.toggle = function() {
			//1.找到navs节点，将其left属性改变
			//2。找到dd节点，改变其transform的值
			$rootScope.collapsed = !$rootScope.collapsed;
			$rootScope.ismenu = !$rootScope.ismenu;
			//方法2：找到navs节点，添加一个类名为collapse
			//根据collapsed的值判断是收起还是打开
			var dds = document.querySelectorAll(".navs dd");
			if($rootScope.collapsed){
				for(var i=0,len=dds.length;i<len;i++){
				//遍历所有的dd,将所有的dd的transform属性改为translate(0)
				var dd = dds[i];
				dd.style.transform = "translate(0)";
				// 设置每个dd依次入场(动画过渡效果)
				dd.style.transitionDuration =(i+1)*0.2+"s";
			
					}
				}
			else{

				for(var j=dds.length-1;j>0;j--){
					dds[j].style.transform = "translate(-100%)";
					dds[j].style.transitionDuration = (dds.length-j)*0.2+"s";
					}
				}	
		};
		//toggle函数结束
	}]);
	//解决锚点乱码bug
	yike.config(function($locationProvider){
		$locationProvider.hashPrefix("");
	});
	//配置路由
	yike.config(["$routeProvider",function($routeProvider) {
		//配置路由具体内容
		$routeProvider.when("/today",{templateUrl:"./views/today.html"});
	}]);














