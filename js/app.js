var gApp = angular.module('gApp', []);
    gApp.run(function($rootScope){
    	$rootScope.address = "서울시 금천구 가산디지털2로 115 대륭테크노타운3차";
    	$rootScope.dns = "GooDee";
    	$rootScope.title = "Portfolio";
    	$rootScope.name = "임채영";
    });
	gApp.controller('gCtrl', function($scope) {
		$scope.htmlCheck = false;
		$scope.bodyCheck = false;
		$scope.btCheck = false;
		$scope.projectFlag = false;
		$scope.projectUrl = "";
		$scope.btnActive = 1;
		
		$scope.dropEvent = function() {
			$scope.htmlCheck = !$scope.htmlCheck;
			$scope.bodyCheck = !$scope.bodyCheck;
			$scope.btCheck   = !$scope.btCheck;
		};
		
		$scope.projectEvent = function(rows) {
			$scope.row = rows;
			if($scope.projectUrl == rows.url) {
				$scope.projectUrl = "";
				$scope.projectFlag = false;
			} else {
				$scope.projectUrl = rows.url;
				$scope.projectFlag = true;
			}
		}
		
		$scope.iFrameLink = function(){
			if($scope.iframeView){
				location.href = $scope.iframeView;
			}
		}
		
		$scope.btnList = [
			{filter: "*",      name: "All",      active: true },
			{filter: ".bgOn",  name: "Personal", active: false},
			{filter: ".bgOff", name: "Team",     active: false}
		];
		
		$scope.dataSource = [
			{
			 path: "portfolio/",
			 url : "team/team.pdf", 
			 title: "Team",
			 name: "Impression",
			 img: "team/TeamImpression.png",
			 type : true, 
			 contents: "화면과 코드가 맞지 않아 화면을 다시 짜는 경험과 코드에 예외처리를 해주지 않아 테스트 하다가 오류가 많아 고치며 고생했던 경험을 통해 기획의 중요성을 알았고 팀원들과 서로 역량에 맞춰 역할을 나눠 각자 역할에 최선을 다해 좋은 결과가 나오게 되어 뿌듯하였습니다. 아쉬운 점이 있다면 롤API 를 가져와서 구현을 하고 싶었는데 유효기간 등의 문제로 API를 사용하지 못한것이 아쉽습니다."
			},{
			 path: "portfolio/",
			 url : "personal/personal.pdf", 
			 title: "Personal",
			 name: "Impression",
			 img: "personal/PersonalImpression.png",
			 type : false,
			 contents: "싸이월드 같은 미니룸이 만들고싶었는데 3D 를 2D 로 구현해야 한다는 큰 벽을 만나 결국 2D로 만드는걸로 타협보는데 시간을 너무 많이 소비해서 아쉽습니다. 기회가 된다면 Isomectric 를 배워서 제가 원하던 3D 로 마이룸을 다시 한번 구현해보고 싶습니다. 그래도 하고 싶은 것을 만들어서 재밌게 프로젝트를 하였고 스스로 뭐가 부족한지를 알고 고쳐나가는 의미있는 시간이였던 것 같습니다."
			},{
			 path: "media/",
			 url : "personal.mp4", 
			 title: "Personal",
			 name: "Media",
			 img: "personal/PersonalMedia.png",
			 type : false, 
			 contents: ""
			}
		];
		
		$scope.btnEvnet = function(index){
			$scope.projectUrl = "";
			$scope.projectFlag = false;
			
			for(var i = 0; i < $scope.btnList.length; i++){
				$scope.btnList[i].active = false;
			}
			$scope.btnList[index].active = true;
			$scope.grid.isotope({ filter: $scope.btnList[index].filter });
		}
		
		setTimeout(function(){
			$scope.grid = $('#portfolioGroup').isotope();
		}, 200);
	});
	gApp.directive('resize', function ($window) {
	    return function (scope, element) {
	        var w = angular.element($window);
	        scope.getWindowDimensions = function () {
	            return {
	                'h': w.height(),
	                'w': w.width()
	            };
	        };
	        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	            if(newValue.w >= 768){
					scope.htmlCheck = false;
					scope.bodyCheck = false;
					scope.btCheck = false;
				}
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    }
	});