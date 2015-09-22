(function () {

  function routes($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'client/home/home.ng.html',
          controller: 'HomeCtrl',
          controllerAs: 'home'
        })
        .when('/video/edit/create/', {
          templateUrl: 'client/video/video_edit.ng.html',
          controller: 'VideoEditCtrl',
          controllerAs: 'edit'
        })
        .when('/video/edit/:videoId', {
          templateUrl: 'client/video/video_edit.ng.html',
          controller: 'VideoEditCtrl',
          controllerAs: 'edit'
        })
        .when('/video/preview/:videoId', {
          templateUrl: 'client/video/video_preview.ng.html',
          controller: 'VideoEditCtrl',
          controllerAs: 'edit'
        })
        .otherwise({redirectTo: '/'});
  }

  angular.module('langvid')
      .config(['$routeProvider', routes]);
}());