angular.module('blog.directives', [
  'blog.directives.markdown',
  'blog.directives.timeSince'
]);

angular.module('blog.directives.markdown', ['ngSanitize']).
  directive('markdown', function($sanitize) {
    var markdownConverter = new Showdown.converter();

    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.$watch(attrs.markdown, function(newVal) {
          var html = $sanitize(markdownConverter.makeHtml(newVal));
          element.html(html);
        });
      }
    };
  });

angular.module('blog.directives.timeSince', [])
  .directive('timeSince', function($timeout) {
    return function(scope, element, attrs) {
      var $element = angular.element(element),
          timeout_id;

      function timeUntilTick(age) {
        if (age < 1) {
          return 1;
        } else if (age < 60) {
          return 30;
        } else if (age < 180) {
          return 300;
        } else {
          return 3600;
        }
      }

      function updateValue(){
        var value = scope.$eval(attrs.timeSince),
            time = moment.utc(value)
            age = moment().diff(time, 'minute');

        element.text(time.fromNow());

        timeout_id = $timeout(updateValue, timeUntilTick(age) * 1000);
      }

      element.bind('$destroy', function() {
        $timeout.cancel(timeout_id);
      });

      updateValue();
    };
  });
