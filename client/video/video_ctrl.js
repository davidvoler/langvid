(function () {
  "use strict";
  function VideoCtrl($meteor,$routeParams) {
    var self = this;
    self.videoId= $routeParams.videoId;
    self.video =  $meteor.object(Video, self.videoId, false);  
  }
  angular.module('langvid')
      .controller('VideoCtrl', ['$meteor','$routeParams', VideoCtrl]);
}());