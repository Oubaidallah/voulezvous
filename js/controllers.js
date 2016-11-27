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
    $scope.goVisibilitePerso = function () { $state.go("visibilitePerso"); }
    $scope.goCredit = function () { $state.go("credit"); }
    $scope.goInvitation = function () { $state.go("invitation"); }
    $scope.goConfirmationQuitter = function () { $state.go("confirmationQuitter"); }
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

.controller('MyprofCtrl', function ($scope, $http, $state, $ionicSideMenuDelegate, $ionicScrollDelegate, UserService) {

    $scope.ageMin = 18;
    $scope.ageMax = 80;

    UserService.getCurrentUser().then(
            function (r) { console.log(r.data); $scope.currentUser = r.data; },
            function (e) { console.log(e) }
        )


    $http.get('http://bluepenlabs.com/projects/voulezvous/api.php/recherche?transform=1').
        then(
            function (r) { console.log(r.data); $scope.recherches = r.data; },
            function (e) { console.log(e) }
        )

    $scope.typePerso = [
        { Id: 1, Name: 'Femme', Selected: true },
        { Id: 2, Name: 'Homme', Selected: false },
        { Id: 3, Name: 'Homme et Femme', Selected: false }
    ];

    $scope.typeProfil = [
        { Id: 1, Name: 'INTJ', Selected: true },
        { Id: 2, Name: 'INTP', Selected: false },
        { Id: 3, Name: 'ENTJ', Selected: false },
        { Id: 4, Name: 'ENTP', Selected: false },
        { Id: 5, Name: 'INFJ', Selected: false },
        { Id: 6, Name: 'INFP', Selected: false },
        { Id: 7, Name: 'ENFJ', Selected: false },
        { Id: 8, Name: 'ENFP', Selected: false },
        { Id: 9, Name: 'ISTJ', Selected: false },
        { Id: 10, Name: 'ISFJ', Selected: false },
        { Id: 11, Name: 'ESTJ', Selected: false },
        { Id: 12, Name: 'ESFJ', Selected: false },
        { Id: 13, Name: 'ISTP', Selected: false },
        { Id: 14, Name: 'ISFP', Selected: false },
        { Id: 15, Name: 'ESTP', Selected: false },
        { Id: 16, Name: 'ESFP', Selected: false },
    ];

    /*$scope.editRecherche = function () {

        $http.delete('http://bluepenlabs.com/projects/voulezvous/api.php/recherche/',
        { "Content-Type": "application/json" }).then(function (s) { console.log(); }, function (e) { console.log(e); })

        $http.post('http://bluepenlabs.com/projects/voulezvous/api.php/recherche/',
            { "id_user": $scope.currentUser.id, "ageMin": "20", "ageMax": "40", "sexe": $scope.sexe, "distance": $scope.r.distance, "profile": $scope.profile },
            { "Content-Type": "application/json" }).then(function (s) { }, function (e) { console.log(e); })
        $scope.goMonprofile();
    }*/


    $http.get('http://bluepenlabs.com/projects/voulezvous/api.php/personne/1').
        then(
            function (r) { console.log(r.data); $scope.personne = r.data; },
            function (e) { console.log(e) }
        );

    $scope.editProfile = function () {
        /*$.post({
            dataType: "json",
            url: 'http://bluepenlabs.com/projects/voulezvous/api.php/message/' + $scope.personne.id,
            data: { "surnom": $scope.personne.surnom, "description": $scope.personne.description },
            success: console.log("ok")
        });*/
        /*$.ajax('http://bluepenlabs.com/projects/voulezvous/api.php/message/' + $scope.personne.id, {
            method: 'PUT',
            contentType: 'application/json',
            processData: false,
            data: JSON.stringify({ "surnom": $scope.personne.surnom, "description": $scope.personne.description })
        })*/
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

.controller('MsgCtrl', function ($scope, $http, UserService, $state, GetUserId, GetInvId, $ionicPopup, FriendsService) {

    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Voulez Vous ...',
            template: 'quitter le site avec ...'
        });

        alertPopup.then(function (res) {
            $state.go("home");
            console.log('quitter est fait');
        });
    };

    $scope.showConfirm = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Voulez Vous ...',
            template: 'Quitter le site avec moi ?'
        });

        confirmPopup.then(function (res) {
            if (res) {
                $state.go("confirmationQuitter");
                console.log('Oui');
            } else {
                console.log('Non');
            }
        });
    };

    $scope.showConfirmInvi = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Voulez Vous ...',
            template: 'discuter avec moi ?',
            cancelText: 'supprimer',
            okText: 'accepter',
        });

        confirmPopup.then(function (res) {
            if (res) {
                //$scope.personne.nbr_credit = $scope.personne.nbr_credit - 1;
                $scope.deleteInvi();
                $scope.sendInvi();
                console.log('Oui');
            } else {
                //$scope.deleteInvi();
                console.log('Non');
            }
        });

    };

    $scope.goInvitDetails = function (userClickedId) {
        GetUserId.userId = userClickedId;
        console.log(GetUserId);
        $state.go("profile");
    }

    $scope.getUserInvID = function (userClickedId) {
        GetUserId.userId = userClickedId;
        console.log(GetUserId.userId);
    }

    $scope.getInvId = function (inviClickedId) {
        GetInvId.invId = inviClickedId;
        console.log(GetInvId.invId);
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
            function (r) { console.log(r.data); $scope.messagess = r.data; },
            function (e) { console.log(e) }
        )

    $http.get('http://bluepenlabs.com/projects/voulezvous/api.php/message?filter[]=msg_recepteurid,eq,' + GetUserId.userId + '&filter[]=msg_emetteurid,eq,' + GetUserId.userId + '&satisfy=any&transform=1').
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
        $scope.getDatetime = new Date();
        $http.post('http://bluepenlabs.com/projects/voulezvous/api.php/message/',
            { "msg_emetteurid": $scope.currentUser.id, "msg_recepteurid": GetUserId.userId, "message": $scope.mmessage, "msg_timedatedenvoi": $scope.getDatetime },
            { "Content-Type": "application/json" }).then(function (s) { $scope.mmessage = null; }, function (e) { console.log(e); })

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

    $scope.sendInvi = function () {

        $http.post('http://bluepenlabs.com/projects/voulezvous/api.php/invitation/',
            { "envoyer": "0", "annuler": "0", "accepter": "1", "inv_recepteurid": $scope.currentUser.id, "inv_emetteurid": GetUserId.userId },
            { "Content-Type": "application/json" }).then(function (s) { }, function (e) { console.log(e); })
        $scope.goInvitation();
    }

    $scope.deleteInvi = function () {
        $http.delete('http://bluepenlabs.com/projects/voulezvous/api.php/invitation/' + GetInvId.invId,
        { "Content-Type": "application/json" }).then(function (s) { console.log(); }, function (e) { console.log(e); })
        $state.go("home");
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
})

.factory('GetInvId', function () {
    return { invId: '' };
})
;