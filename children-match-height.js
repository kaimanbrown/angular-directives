'use strict';

angularDirectives.directive('childrenMatchHeights', function() {
    return {
        scope: {
            'resetHeights' : "="
        },
        restrict: "A",
        replace: false,
        link: function($scope, element, attrs) {

            var childrenHeights;
            var matchHeight = function(){
                var winWidth = $(window).width();
                var childrenHeights = [];  
                var maxHeight = 0;
                var currentHeight = 0;

                if(winWidth >= 768  ) {                    
                    element.children().each( function(){
                      $(this).css('height', '');
                    });
                    element.children().each( function(){
                        var childHeight = $(this).outerHeight();
                        if(childHeight > 0){
                            childrenHeights.push(childHeight);                            
                        }
                    });

                    for (var i = childrenHeights.length - 1; i >= 0; i--) {                       
                        currentHeight = childrenHeights[i];                       
                        if(maxHeight <= currentHeight){
                            maxHeight = currentHeight;
                        }
                    };

                    element.children().each( function(){
                        if($(this).outerHeight() !== 0){
                            $(this).css('height',maxHeight+'px');                                                    
                        }
                    });
                }
                else if($scope.resetHeights == undefined) {
                    element.children().each( function(){
                      $(this).css("height", '100%');
                    });
                }
            }
            $(window).bind("load resize orientationchange", matchHeight);
        }
    };
});