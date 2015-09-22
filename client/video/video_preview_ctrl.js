(function () {
  "use strict";
  function VideoPreviewCtrl($meteor,$routeParams) {
    var self = this;
    self.videoId= $routeParams.videoId;
    self.video =  $meteor.object(Video, self.videoId, false);  
  }
  angular.module('langvid')
      .controller('VideoPreviewCtrl', ['$meteor','$routeParams', VideoPreviewCtrl]);
}());