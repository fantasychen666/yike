/*
* @Author: Administrator
* @Date:   2017-07-10 15:30:20
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-10 16:53:38
*/

'use strict';
//放所有的控制器
//主要目的用于专门管理控制器
//将所有控制器整体定义成一个控制器模块
	var controllers = angular.module("controllers",[]);
	//测试  创建控制器
	controllers.controller("navCtr",["$scope",function($scope) {
		//模拟模型层数据
		$scope.datas = [
		{"url":"#today","icon":"icon-home","txt":"今日一刻"},
		{"url":"#older","icon":"icon-file-empty","txt":"往期内容"},
		{"url":"#author","icon":"icon-pencil","txt":"热门作者"},
		{"url":"#category","icon":"icon-menu","txt":"栏目浏览"},
		{"url":"#favorite","icon":"icon-heart","txt":"我的喜欢"},
		{"url":"#setting","icon":"icon-cog","txt":"设置"},
		];
	}]);


	