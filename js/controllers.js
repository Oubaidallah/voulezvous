angular.module('starter') // ligne hethi bch on a recupéré le module avec son nom
.controller('AppCtrl', function ($scope, $state) {
    $scope.goHome = function () { $state.go("home"); }
    $scope.goMonprofile = function () { $state.go("monprofile"); }
    $scope.goEditProfile = function () { $state.go("editProfile"); }
    $scope.goRecherche = function () { $state.go("recherche"); }
    $scope.goMessage = function () { $state.go("message"); }
    $scope.goDiscussion = function () { $state.go("discussion"); }
    $scope.goAlbum = function () { $state.go("album"); }
    $scope.goQuestion = function () { $state.go("question"); }
    $scope.goProfile = function () { $state.go("profile"); }
    $scope.goHistorique = function () { $state.go("historique"); }
    $scope.goRecherchePerso = function () { $state.go("recherchePerso"); }
    $scope.goCredit = function () { $state.go("credit"); }
    $scope.goInvitation = function () { $state.go("invitation"); }

    // call to get the user and set it to your scope variable
    //ngUserService.getUser(function(user){$scope.currentUser = user;});

}) // ligne hethi bch zedna un controlleur lel module récupéré

.controller('index', function ($scope, $http, UserService, $ionicPopup) {
    UserService.getCurrentUser().then(
            function (r) { console.log(r.data); $scope.currentUser = r.data; },
            function (e) { console.log(e) }
        )
    $scope.showAlert = function () {

        var alertPopup = $ionicPopup.alert({
            title: 'VoulezVous plus des points crédits ?',
            template: 'Petite surprise qui arrive bientôt ! :D'
        });

        alertPopup.then(function (res) {
            // Custom functionality....
        });
    };
})

.controller('MyprofCtrl', function ($scope, $http, $state, $ionicSideMenuDelegate, $ionicScrollDelegate) {
    $http.get('http://bluepenlabs.com/projects/voulezvous/api.php/recherche/').
        then(
            function (r) { console.log(r.data); $scope.recherches = r.data; },
            function (e) { console.log(e) }
        )
    $http.get('http://bluepenlabs.com/projects/voulezvous/api.php/personne/1').
        then(
            function (r) { console.log(r.data); $scope.personne = r.data; },
            function (e) { console.log(e) }
        );
    $scope.editProfile = function () {
        $http.put('http://bluepenlabs.com/projects/voulezvous/api.php/personne/' + $scope.personne.id,
            { "surnom": $scope.personne.surnom, "description": $scope.personne.description },
            { "Content-Type": "application/json" }).then(function (s) { $state.go("monprofile"); }, function (e) { console.log(e); })
    }
    $scope.editRechercheValue = function () {
        $http.put('http://bluepenlabs.com/projects/voulezvous/api.php/personne/' + $scope.personne.id,
            { "rechercheValue": $scope.personne.recherche },
            { "Content-Type": "application/json" }).then(function (s) { $state.go("profile"); }, function (e) { console.log(e); })
    }

})

.controller('MsgCtrl', function ($scope, $http, UserService, $state, GetUserId) {

    $scope.goInvitDetails = function (userClickedId) {
        GetUserId.userId = userClickedId;
        console.log(GetUserId);
        $state.go("profile");
    }

    $scope.reloadRoute = function () {
        $route.reload();
    }

    $http.get('http://bluepenlabs.com/projects/voulezvous/api.php/invitation?transform=1').
        then(
            function (r) { console.log(r.data); $scope.invitations = r.data; },
            function (e) { console.log(e) }
        )
    $http.get('http://bluepenlabs.com/projects/voulezvous/api.php/message?transform=1').
        then(
            function (r) { console.log(r.data); $scope.messages = r.data; },
            function (e) { console.log(e) }
        )

    UserService.getAllUser().then(
            function (r) { console.log(r.data); $scope.personnes = r.data; },
            function (e) { console.log(e) }
        )

    UserService.getCurrentUser().then(
            function (r) { console.log(r.data); $scope.currentUser = r.data; },
            function (e) { console.log(e) }
        )
    $scope.addMessage = function () {
        $http.post('http://bluepenlabs.com/projects/voulezvous/api.php/message/',
            { "msg_emetteurid": "2", "msg_recepteurid": "1", "message": "tesst from 2 to 1", "msg_timedatedenvoi": "16/11/05 11:25:28" },
            { "Content-Type": "application/json" }).then(function (s) { loadData(); }, function (e) { console.log(e); })
    }

    $scope.getProfile = function (prof_id) {
        $http.get('http://bluepenlabs.com/projects/voulezvous/api.php/personne/' + prof_id).
        then(
            function (r) { console.log(r.data); $scope.personnes = r.data; alert(personnes); },
            function (e) { console.log(e) }
        )
    }

    $scope.getImgUrl = function () {
        UserService.getAllUser().then(
            function (r) { console.log(r.data); $scope.personnes = r.data; },
            function (e) { console.log(e) }
        )
        $scope.myImgUrl = personnes.img;
    }

})

.controller('QueCtrl', function ($scope, $http) {
    $http.get('http://bluepenlabs.com/projects/voulezvous/api.php/question/').
        then(
            function (r) { console.log(r.data); $scope.questions = r.data; },
            function (e) { console.log(e) }
        )
})

.controller('HomeCtrl', function ($scope, $http) {
    $http.get('http://bluepenlabs.com/projects/voulezvous/api.php/personne/').
        then(
            function (r) { console.log(r.data); $scope.personnes = r.data; },
            function (e) { console.log(e) }
        )
})

.controller('ProfCtrl', function ($scope, $http, UserService, GetUserId, FriendsService) {

    /*FriendsService.checkInvit(1, GetUserId.userId).then(
        function (r) {
            if ((GetUserId.userId ==  r.inv_recepteurid) && ($scope.invitations.inv_emetteurid == $scope.currentUser.id))
                $scope.isFriendOrInvited = true;
            else
                $scope.isFriendOrInvited = false;
        },
            function (e) { console.log(e) }
        )*/

    $scope.isFriendOrInvited = false;

    UserService.getAllUser().then(
            function (r) { console.log(r.data); $scope.personnes = r.data; },
            function (e) { console.log(e) }
        )

    UserService.getCurrentUser().then(
            function (r) { console.log(r.data); $scope.currentUser = r.data; },
            function (e) { console.log(e) }
        )

    $http.get('http://bluepenlabs.com/projects/voulezvous/api.php/personne/' + GetUserId.userId).
        then(
            function (r) { console.log(r.data); $scope.personne = r.data; },
            function (e) { console.log(e) }
        );

    $http.get('http://bluepenlabs.com/projects/voulezvous/api.php/invitation?transform=1').
        then(
            function (r) {
                console.log(r.data); $scope.invitations = r.data;
            },
            function (e) { console.log(e) }
        );

    $scope.sendInvi = function () {
        
        $http.post('http://bluepenlabs.com/projects/voulezvous/api.php/invitation/',
            { "envoyer": "1", "annuler": "0", "accepter": "0", "inv_recepteurid": GetUserId.userId, "inv_emetteurid": $scope.currentUser.id },
            { "Content-Type": "application/json" }).then(function (s) { }, function (e) { console.log(e); })
        $scope.goInvitation();
    }

})

.factory('GetUserId', function () {
    return { userId: '' };
});
;