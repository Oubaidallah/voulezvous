angular.module('starter')
.factory('UserService', ['$http', function ($http) {
    function getCurrentUser() {
        var userId = 1;
        return $http.get('http://localhost/api.php/personne/' + userId).
        then(
            function (r) { return r; },
            function (e) { }
        );
    }
    function getAllUser() {
        return $http.get('http://localhost/api.php/personne?transform=1').
        then(
            function (r) { return r; },
            function (e) { }
        );
    }
    return {
        getCurrentUser, getAllUser
    }

}])

.factory('FriendsService',['$http', function ($http) {
    function checkInvit(currentUserID,otherUserID) {
        return $http.get('http://localhost/api.php/invitation?filter[]=inv_emetteurid,eq,' + currentUserID + '&filter[]=inv_recepteurid,eq,' + otherUserID+'&transform=1')
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

