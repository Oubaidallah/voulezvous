﻿angular.module('starter')
.factory('UserService', ['$http', function ($http) {
    var currentUserLS = localStorage.getItem('currentUserId');
    //var userId = 1;
    function getCurrentUser() {
        return $http.get('http://voulezvous.io/apiCRUD.php/users/' + currentUserLS).
        then(
            function (r) { return r; },
            function (e) { }
        );
        $window.location.reload();
    }
    function getAllUser() {
        return $http.get('http://voulezvous.io/apiCRUD.php/users?transform=1').
        then(
            function (r) { return r; },
            function (e) { }
        );
        $window.location.reload();
    }
    return {
        getCurrentUser, getAllUser
    }

}])

.factory('FriendsService',['$http', function ($http) {
    function checkInvit(currentUserID,otherUserID) {
        return $http.get('http://voulezvous.io/apiCRUD.php/invitation?filter[]=inv_emetteurid,eq,' + currentUserID + '&filter[]=inv_recepteurid,eq,' + otherUserID + '&transform=1')
            .then(
            function (r) { return r; },
            function (e) { }
        );
    }
    return {
        checkInvit
    }
}])

;

