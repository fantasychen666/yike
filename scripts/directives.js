
angular.module("directives",[])
.directive("loading",function(){
	return {
		restrict:"EMAC",
		replace:true,
		template:"<img src='' alt=''/>"
	};
});








