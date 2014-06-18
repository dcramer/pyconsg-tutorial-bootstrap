'use strict';

describe('controllers', function(){
  describe('PostListCtrl', function(){
    beforeEach(module('blog.controllers.postList'));

    it('should bind postList', inject(function($controller, $rootScope){
      var samplePost = {id: 1, title: 'Test', body: 'Foo bar'};
      var $scope = $rootScope.$new();
      var ctrl = $controller('PostListCtrl', {
        $scope: $scope,
        postListResponse: {data: [samplePost]}
      });

      expect($scope.postList.length).toBe(1);
      expect($scope.postList[0].id).toBe(samplePost.id);
    }));
  });

  describe('PostDetailsCtrl', function(){
    beforeEach(module('blog.controllers.postDetails'));

    it('should bind post', inject(function($controller, $rootScope){
      var samplePost = {id: 1, title: 'Test', body: 'Foo bar'};
      var $scope = $rootScope.$new();
      var ctrl = $controller('PostDetailsCtrl', {
        $scope: $scope,
        postDetailsResponse: {data: samplePost}
      });

      expect($scope.post.id).toBe(samplePost.id);
    }));
  });

  describe('NewPostCtrl', function(){
    var $httpBackend, samplePost;

    beforeEach(module('blog.controllers.newPost'));

    beforeEach(inject(function($injector){
      samplePost = {id: 1, title: 'Test', body: 'Foo bar'};
      $httpBackend = $injector.get('$httpBackend');
      $httpBackend.when('POST', '/api/0/posts/').respond(samplePost);
    }));

    it('should support saveForm', inject(function($controller, $rootScope){
      var $scope = $rootScope.$new();
      var ctrl = $controller('NewPostCtrl', {
        $scope: $scope
      });

      $scope.formData = samplePost;

      $httpBackend.expectPOST('/api/0/posts/', $scope.formData)
        .respond(201, samplePost);

      $scope.saveForm();

      $httpBackend.flush();
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  });

});
