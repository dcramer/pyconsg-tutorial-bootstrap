angular.module('blog.services', [
  'blog.services.api',
  'blog.services.loadingIndicator'
]);

angular.module('blog.services.api', [])
  .factory('api', function($http){
    var api = {},
        urlBase = '/api/0';

    api.listPosts = function(){
      return $http.get(urlBase + '/posts/');
    };

    api.createPost = function(data){
      return $http.post(urlBase + '/posts/', data);
    };

    api.getPost = function(id){
      return $http.get(urlBase + '/posts/' + id + '/');
    };

    api.updatePost = function(id, data){
      return $http.post(urlBase + '/posts/' + id + '/', data);
    };

    return api;
  });

angular.module('blog.services.loadingIndicator', [])
  .config(function($httpProvider){
    var interceptor = function($q, $rootScope) {
      var reqsTotal = 0;
      var reqsCompleted = 0;

      return {
        request: function(config) {
          $rootScope.loading = true;
          reqsTotal++;
          return config;
        },

        response: function(response) {
          reqsCompleted++;
          if (reqsCompleted >= reqsTotal) {
            $rootScope.loading = false;
          }
          return response;
        },

        responseError: function(rejection) {
          reqsCompleted++;
          if (reqsCompleted >= reqsTotal) {
            $rootScope.loading = false;
          }
          return $q.reject(rejection);
        }
      };
    };

    $httpProvider.interceptors.push(interceptor);
  });
