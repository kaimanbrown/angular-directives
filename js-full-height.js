'use strict';
/*
 * this directive adds 'touch iOS' classes to the element, allowing for iOS/touch device CSS to be applied.
 */

angularDirectives.directive('jsFullHeight', function() {
    return {
        scope: {
            'height': '@',
        },
        restrict: 'A',
        replace: false,
        link: function($scope, $element, $attrs) {

            var CUSTOM_HEIGHT = $scope.height;
            var NAV_HEIGHT = 0;
            var RESET_HEIGHT = 700;
            var RESET_WIDTH = 767;

            var fullHeight = function(){
                var WIN_HEIGHT = $(window).height();
                var WIN_WIDTH = $(window).width();

                if(WIN_HEIGHT <= RESET_HEIGHT || WIN_WIDTH <= RESET_WIDTH){
                    $element.css('height', 'auto');
                }else {
                    if(CUSTOM_HEIGHT == 'undefined'){
                        $element.outerHeight((WIN_HEIGHT-NAV_HEIGHT) + 'px');
                    }
                    $element.outerHeight((WIN_HEIGHT*(CUSTOM_HEIGHT / 100)) + 'px');

                }
            }

            $(window).bind('resize', fullHeight);
            angular.element(document).ready(fullHeight);
        }
    };
});