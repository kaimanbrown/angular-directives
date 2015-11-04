'use strict';

angularDirectives.directive('ResponsiveSquare', function() {
    return {
        scope: {
        },
        restrict: 'A',
        replace: false,
        link: function(scope, element, attrs) {
            var resizeSquare = function () {
                element.css('height', element.width() + 'px');
            }
            $(window).bind('load resize orientationchange', resizeSquare);
            resizeSquare();
            setTimeout(function() {
                resizeSquare();
            }, 300);
        }
    };
});