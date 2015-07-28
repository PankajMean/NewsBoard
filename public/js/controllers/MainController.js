app.controller('MainCtrl', [
    '$scope',
    'posts',
    'auth',
    function ($scope, posts, auth) {
        'use strict';
        $scope.posts = posts.posts;
        $scope.isLoggedIn = auth.isLoggedIn;
        $scope.addPost = function () {
            if (!$scope.title || $scope.title === '') {
                alert('Post is required!');
                return;
            }
            posts.create({
                title: $scope.title,
                link: $scope.link
            });
            $scope.title = '';
            $scope.link = '';
        };
    
        $scope.incrementUpvotes = function (post) {
            posts.upvote(post);
        };
    
    }]);