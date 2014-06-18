'use strict';

angular.module('blog', [
  'ngRoute',

  'blog.controllers',
  'blog.directives',
  'blog.services'
]).config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'post-list.html',
      controller: 'PostListCtrl',
      resolve: {
        postListResponse: function($http) {
          return $http.get('/api/0/posts/');
        }
      }
    })
    .when('/posts/:post_id', {
      templateUrl: 'post-details.html',
      controller: 'PostDetailsCtrl',
      resolve: {
        postDetailsResponse: function($http, $route) {
          var postId = $route.current.params.post_id;
          return $http.get('/api/0/posts/' + postId + '/');
        }
      }
    })
    .when('/new/post', {
      templateUrl: 'new-post.html',
      controller: 'NewPostCtrl'
    });
});
