(function () {

  function routes($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'client/home/home.ng.html',
          controller: 'HomeCtrl',
          controllerAs: 'home'
        })
        .when('/video/:videoId', {
          templateUrl: 'client/video/video.ng.html',
          controller: 'VideoCtrl',
          controllerAs: 'video'
        })
        .otherwise({redirectTo: '/'});
  }

  angular.module('langvid')
      .config(['$routeProvider', routes]);
}());