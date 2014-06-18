angular.module('blog.controllers', [
  'blog.controllers.postList',
  'blog.controllers.postDetails',
  'blog.controllers.newPost'
]);

angular.module('blog.controllers.postList', ['blog.services.api'])
  .controller('PostListCtrl', function($scope, $timeout, api, postListResponse){
    var timeout_id;

    $scope.postList = postListResponse.data;

    $timeout(function(){
      api.listPosts().success(function(data){
        $scope.postList = data;
      });
    }, 5000);

    $scope.$on('$destroy', function(){
      $timeout.cancel(timeout_id);
    });
  });

angular.module('blog.controllers.postDetails', ['blog.services.api'])
  .controller('PostDetailsCtrl', function($scope, postDetailsResponse){
    $scope.post = postDetailsResponse.data;
  });

angular.module('blog.controllers.newPost', ['blog.services.api'])
  .controller('NewPostCtrl', function($location, $scope, api){
    $scope.formData = {};

    $scope.saveForm = function(){
      api.createPost($scope.formData)
        .success(function(data){
          $location.path('/posts/' + data.id);
        });
    };
  });
