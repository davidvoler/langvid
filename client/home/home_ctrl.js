(function () {
  "use strict";
  function HomeCtrl($meteor) {
    var self = this;
    self.videoList =  $meteor.collection(Video);
    self.newVideo = {};
    self.remove = function(video){
      $scope.videoList.splice(self.videoList.indexOf(video), 1);
    };
    self.add = function(){
    	self.videoList.push(self.newVideo);
    	self.newVideo = {};
    };

  }
  angular.module('langvid')
      .controller('HomeCtrl', ['$meteor', HomeCtrl]);
}());