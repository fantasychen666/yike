/*
* @Author: Administrator
* @Date:   2017-07-10 15:30:20
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-11 18:44:53
*/

'use strict';
//放所有的控制器
//主要目的用于专门管理控制器
//将所有控制器整体定义成一个控制器模块
angular.module("controllers",[])
.controller("navCtr",["$scope","$http","$rootScope",function($scope,$http,$rootScope) {//测试  创建控制器
		//模拟模型层数据
		$http({
			method:"GET",
			url:"./api/navs.php"
		}).then(function(result){
			$rootScope.datas = result.data.nav;
		});
	}])
//今日一刻的控制器
.controller("todayCtr",["$scope","$filter","$http","$rootScope",function($scope,$filter,$http,$rootScope){
	// 获取今天的日期
	var today = $filter("date")(new Date,"yyyy-MM-dd");
	$scope.time = today;
	$rootScope.loaded = false;
	$http({
		method:"GET",
		url:"./api/today.php",
		params:{today:today}
	}).then(function(result){
		$rootScope.loaded = true;
		// console.log(result);
		//将数据放到模型层
		$scope.time = result.data.date;//获取的查询的当天的日期
		$scope.posts= result.data.posts;//获取内容
	});
	$rootScope.title = "今日一刻";
}])
//往期内容控制器
.controller("olderCtr",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$rootScope.loaded = false;
	$http({
		method:"GET",
		url:"./api/older.php"
	}).then(function(result){
		$rootScope.loaded = true;
		$scope.time = result.data.date;
		$scope.posts= result.data.posts;
	});
	$rootScope.title = "往期内容";
}])
.controller("authorCtr",["$scope","$http",function($scope,$http){
	$rootScope.title = "热门作者";
}]);


	