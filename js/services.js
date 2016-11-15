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
        return $http.get('http://localhost/api.php/personne/').
        then(
            function (r) { return r; },
            function (e) { }
        );
    }
    return {
        getCurrentUser, getAllUser
    }

}])

;

