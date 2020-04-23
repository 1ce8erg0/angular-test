(function() {
    'use strict';

    angular.module('myFirstApp', [])

    .controller('myFirstController', function ($scope) {
        $scope.name = "";
        $scope.totalNumber = 0;

        $scope.runNumber = function() {
            var anumber = runNumbericFromString($scope.name);
            $scope.totalNumber = anumber;
            console.log(anumber);
        };

        function runNumbericFromString(string){
            var totoalStringValue = 0;
            console.log(string.charCodeAt(0));
            for (var i=0; i < string.length; i++){
                totoalStringValue += string.charCodeAt(i);
            }

            return totoalStringValue;
        }

    });

})();