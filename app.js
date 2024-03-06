// app.js
var app = angular.module('imageApp', []);

app.controller('ImageController', function($scope, $http) {
    $scope.images = [];
    $scope.enlargedImage = null;

    // Fetch random images
    for (var i = 0; i < 15; i++) {
        $http.get('https://picsum.photos/400?random=' + i)
            .then(function(response) {
                $scope.images.push({ url: response.config.url });
            });
    }

    $scope.enlargeImage = function(image) {
        $scope.enlargedImage = image.url;
    };

    $scope.closeImage = function() {
        $scope.enlargedImage = null;
    };
});
