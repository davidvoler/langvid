(function () {
  "use strict";
  function VideoEditCtrl($meteor,$routeParams) {
    var self = this; 
    self.videoId= $routeParams.videoId;
    self.video =  $meteor.object(Video, self.videoId, false);  
  }
  angular.module('langvid')
      .controller('VideoEditCtrl', ['$meteor','$routeParams', VideoEditCtrl]);
}());