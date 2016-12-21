angular.module('starter') // ligne hethi bch on a recupéré le module avec son nom
.controller('AppCtrl', function ($scope, $state) {
    $scope.goHome = function () { $state.go("home"); }
    $scope.goMonprofile = function () { $state.go("monprofile"); }
    $scope.goMonProfilee = function () { $state.go("monProfilee"); }
    $scope.goEditProfile = function () { $state.go("editProfile"); }
    $scope.goRecherche = function () { $state.go("recherche"); }
    $scope.goMessage = function () { $state.go("message"); }
    $scope.goVoyage = function () { $state.go("voyage"); }
    $scope.goDiscussion = function () { $state.go("discussion"); }
    $scope.goDiscussionBloquer = function () { $state.go("discussionBloquer"); }
    $scope.goAlbum = function () { $state.go("album"); }
    $scope.goQuestion = function () { $state.go("question"); }
    $scope.goProfile = function () { $state.go("profile"); }
    $scope.goHistorique = function () { $state.go("historique"); }
    $scope.goListeSuppBloq = function () { $state.go("listeSuppBloq"); }
    $scope.goHistoriqueDiscussion = function () { $state.go("historiqueDiscussion"); }
    $scope.goRecherchePerso = function () { $state.go("recherchePerso"); }
    $scope.goVisibilitePerso = function () { $state.go("visibilitePerso"); }
    $scope.goCredit = function () { $state.go("credit"); }
    $scope.goInvitation = function () { $state.go("invitation"); }
    $scope.goConfirmationQuitter = function () { $state.go("confirmationQuitter"); }
    // call to get the user and set it to your scope variable
    //ngUserService.getUser(function(user){$scope.currentUser = user;});

}) // ligne hethi bch zedna un controlleur lel module récupéré

.controller('loginCtrl', function ($scope, $http, User) {
    $scope.nameFB = 'Login please';
    $scope.FBLogin = function () {
        FB.login(function (response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function (response) {
                    console.log('Good to see you, ' + response.name + '.');
                    console.log(response);
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    }
  })

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

.controller('MyprofCtrl', function ($scope, $http, $state, $ionicSideMenuDelegate, $ionicScrollDelegate, UserService, $ionicPopup) {

    $scope.DistMin = 0;
    $scope.DistMax = 150;

    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Aide',
            template: 'Help ! :D'
        });

        alertPopup.then(function (res) {
            console.log('Aide');
        });
    };

    UserService.getCurrentUser().then(
            function (r) { console.log(r.data); $scope.currentUser = r.data; },
            function (e) { console.log(e) }
        )


    $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/recherche?filter=id,eq,' + 1 + '?transform=1').
        then(
            function (r) {
                console.log(r.data);
                $scope.recherches = r.data;

            },
            function (e) { console.log(e) }
        )

    $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/visibilite?filter=id,eq,' + 1 + '?transform=1').
        then(
            function (r) {
                console.log(r.data);
                $scope.visibilites = r.data;

            },
            function (e) { console.log(e) }
        )

    $scope.typePerso = [
        { Name: 'Femme', Selected: true },
        { Name: 'Homme', Selected: false },
        { Name: 'Homme et Femme', Selected: false }
    ];

    $scope.typeProfil = [
        { Name: 'Catégorie 1', Selected: true },
        { Name: 'Catégorie 2', Selected: false },
        { Name: 'Catégorie 3', Selected: false },
        { Name: 'Catégorie 4', Selected: false }
    ];

    $scope.TypePays = [
        { Name: 'Afghanistan', Selected: false },
        { Name: 'Afrique du Sud', Selected: false },
        { Name: 'Akrotiri', Selected: false },
        { Name: 'Albanie', Selected: false },
        { Name: 'Algérie', Selected: false },
        { Name: 'Allemagne', Selected: false },
        { Name: 'Andorre', Selected: false },
        { Name: 'Angola', Selected: false },
        { Name: 'Anguilla', Selected: false },
        { Name: 'Antarctique', Selected: false },
        { Name: 'Antigua-et-Barbuda', Selected: false },
        { Name: 'Antilles néerlandaises', Selected: false },
        { Name: 'Arabie saoudite', Selected: false },
        { Name: 'Arctic Ocean', Selected: false },
        { Name: 'Argentine', Selected: false },
        { Name: 'Arménie', Selected: false },
        { Name: 'Aruba', Selected: false },
        { Name: 'Ashmore and Cartier Islands', Selected: false },
        { Name: 'Atlantic Ocean', Selected: false },
        { Name: 'Australie', Selected: false },
        { Name: 'Autriche', Selected: false },
        { Name: 'Azerbaïdjan', Selected: false },
        { Name: 'Bahamas', Selected: false },
        { Name: 'Bahreïn', Selected: false },
        { Name: 'Bangladesh', Selected: false },
        { Name: 'Barbade', Selected: false },
        { Name: 'Belau', Selected: false },
        { Name: 'Belgique', Selected: false },
        { Name: 'Belize', Selected: false },
        { Name: 'Bénin', Selected: false },
        { Name: 'Bermudes', Selected: false },
        { Name: 'Bhoutan', Selected: false },
        { Name: 'Biélorussie', Selected: false },
        { Name: 'Birmanie', Selected: false },
        { Name: 'Bolivie', Selected: false },
        { Name: 'Bosnie-Herzégovine', Selected: false },
        { Name: 'Botswana', Selected: false },
        { Name: 'Brésil', Selected: false },
        { Name: 'Brunei', Selected: false },
        { Name: 'Bulgarie', Selected: false },
        { Name: 'Burkina Faso', Selected: false },
        { Name: 'Burundi', Selected: false },
        { Name: 'Cambodge', Selected: false },
        { Name: 'Cameroun', Selected: false },
        { Name: 'Canada', Selected: false },
        { Name: 'Cap-Vert', Selected: false },
        { Name: 'Chili', Selected: false },
        { Name: 'Chine', Selected: false },
        { Name: 'Chypre', Selected: false },
        { Name: 'Clipperton Island', Selected: false },
        { Name: 'Colombie', Selected: false },
        { Name: 'Comores', Selected: false },
        { Name: 'Congo', Selected: false },
        { Name: 'Coral Sea Islands', Selected: false },
        { Name: 'Corée du Nord', Selected: false },
        { Name: 'Corée du Sud', Selected: false },
        { Name: 'Costa Rica', Selected: false },
        { Name: 'Côte d"Ivoire', Selected: false },
        { Name: 'Croatie', Selected: false },
        { Name: 'Cuba', Selected: false },
        { Name: 'Danemark', Selected: false },
        { Name: 'Dhekelia', Selected: false },
        { Name: 'Djibouti', Selected: false },
        { Name: 'Dominique', Selected: false },
        { Name: 'Égypte', Selected: false },
        { Name: 'Émirats arabes unis', Selected: false },
        { Name: 'Équateur', Selected: false },
        { Name: 'Érythrée', Selected: false },
        { Name: 'Espagne', Selected: false },
        { Name: 'Estonie', Selected: false },
        { Name: 'États-Unis', Selected: false },
        { Name: 'Éthiopie', Selected: false },
        { Name: 'ex-République yougoslave de Macédoine', Selected: false },
        { Name: 'Finlande', Selected: false },
        { Name: 'France', Selected: true },
        { Name: 'Gabon', Selected: false },
        { Name: 'Gambie', Selected: false },
        { Name: 'Gaza Strip', Selected: false },
        { Name: 'Géorgie', Selected: false },
        { Name: 'Ghana', Selected: false },
        { Name: 'Gibraltar', Selected: false },
        { Name: 'Grèce', Selected: false },
        { Name: 'Grenade', Selected: false },
        { Name: 'Groenland', Selected: false },
        { Name: 'Guam', Selected: false },
        { Name: 'Guatemala', Selected: false },
        { Name: 'Guernsey', Selected: false },
        { Name: 'Guinée', Selected: false },
        { Name: 'Guinée équatoriale', Selected: false },
        { Name: 'Guinée-Bissao', Selected: false },
        { Name: 'Guyana', Selected: false },
        { Name: 'Haïti', Selected: false },
        { Name: 'Honduras', Selected: false },
        { Name: 'Hong Kong', Selected: false },
        { Name: 'Hongrie', Selected: false },
        { Name: 'Ile Bouvet', Selected: false },
        { Name: 'Ile Christmas', Selected: false },
        { Name: 'Ile Norfolk', Selected: false },
        { Name: 'Iles Cayman', Selected: false },
        { Name: 'Iles Cook', Selected: false },
        { Name: 'Iles des Cocos (Keeling)', Selected: false },
        { Name: 'Iles Falkland', Selected: false },
        { Name: 'Iles Féroé', Selected: false },
        { Name: 'Iles Fidji', Selected: false },
        { Name: 'Iles Géorgie du Sud et Sandwich du Sud', Selected: false },
        { Name: 'Iles Heard et McDonald', Selected: false },
        { Name: 'Iles Marshall', Selected: false },
        { Name: 'Iles Pitcairn', Selected: false },
        { Name: 'Iles Salomon', Selected: false },
        { Name: 'Iles Svalbard et Jan Mayen', Selected: false },
        { Name: 'Iles Turks-et-Caicos', Selected: false },
        { Name: 'Iles Vierges américaines', Selected: false },
        { Name: 'Iles Vierges britanniques', Selected: false },
        { Name: 'Inde', Selected: false },
        { Name: 'Indian Ocean', Selected: false },
        { Name: 'Indonésie', Selected: false },
        { Name: 'Iran', Selected: false },
        { Name: 'Iraq', Selected: false },
        { Name: 'Irlande', Selected: false },
        { Name: 'Islande', Selected: false },
        { Name: 'Israël', Selected: false },
        { Name: 'Italie', Selected: false },
        { Name: 'Jamaïque', Selected: false },
        { Name: 'Jan Mayen', Selected: false },
        { Name: 'Japon', Selected: false },
        { Name: 'Jersey', Selected: false },
        { Name: 'Jordanie', Selected: false },
        { Name: 'Kazakhstan', Selected: false },
        { Name: 'Kenya', Selected: false },
        { Name: 'Kirghizistan', Selected: false },
        { Name: 'Kiribati', Selected: false },
        { Name: 'Koweït', Selected: false },
        { Name: 'Laos', Selected: false },
        { Name: 'Lesotho', Selected: false },
        { Name: 'Lettonie', Selected: false },
        { Name: 'Liban', Selected: false },
        { Name: 'Liberia', Selected: false },
        { Name: 'Libye', Selected: false },
        { Name: 'Liechtenstein', Selected: false },
        { Name: 'Lituanie', Selected: false },
        { Name: 'Luxembourg', Selected: false },
        { Name: 'Macao', Selected: false },
        { Name: 'Madagascar', Selected: false },
        { Name: 'Malaisie', Selected: false },
        { Name: 'Malawi', Selected: false },
        { Name: 'Maldives', Selected: false },
        { Name: 'Mali', Selected: false },
        { Name: 'Malte', Selected: false },
        { Name: 'Man, Isle of', Selected: false },
        { Name: 'Mariannes du Nord', Selected: false },
        { Name: 'Maroc', Selected: false },
        { Name: 'Maurice', Selected: false },
        { Name: 'Mauritanie', Selected: false },
        { Name: 'Mayotte', Selected: false },
        { Name: 'Mexique', Selected: false },
        { Name: 'Micronésie', Selected: false },
        { Name: 'Moldavie', Selected: false },
        { Name: 'Monaco', Selected: false },
        { Name: 'Monde', Selected: false },
        { Name: 'Mongolie', Selected: false },
        { Name: 'Monténégro', Selected: false },
        { Name: 'Montserrat', Selected: false },
        { Name: 'Mozambique', Selected: false },
        { Name: 'Namibie', Selected: false },
        { Name: 'Nauru', Selected: false },
        { Name: 'Navassa Island', Selected: false },
        { Name: 'Népal', Selected: false },
        { Name: 'Nicaragua', Selected: false },
        { Name: 'Niger', Selected: false },
        { Name: 'Nigeria', Selected: false },
        { Name: 'Nioué', Selected: false },
        { Name: 'Norvège', Selected: false },
        { Name: 'Nouvelle-Calédonie', Selected: false },
        { Name: 'Nouvelle-Zélande', Selected: false },
        { Name: 'Oman', Selected: false },
        { Name: 'Ouganda', Selected: false },
        { Name: 'Ouzbékistan', Selected: false },
        { Name: 'Pacific Ocean', Selected: false },
        { Name: 'Pakistan', Selected: false },
        { Name: 'Panama', Selected: false },
        { Name: 'Papouasie-Nouvelle-Guinée', Selected: false },
        { Name: 'Paracel Islands', Selected: false },
        { Name: 'Paraguay', Selected: false },
        { Name: 'Pays-Bas', Selected: false },
        { Name: 'Pérou', Selected: false },
        { Name: 'Philippines', Selected: false },
        { Name: 'Pologne', Selected: false },
        { Name: 'Polynésie française', Selected: false },
        { Name: 'Porto Rico', Selected: false },
        { Name: 'Portugal', Selected: false },
        { Name: 'Qatar', Selected: false },
        { Name: 'République centrafricaine', Selected: false },
        { Name: 'République démocratique du Congo', Selected: false },
        { Name: 'République dominicaine', Selected: false },
        { Name: 'République tchèque', Selected: false },
        { Name: 'Roumanie', Selected: false },
        { Name: 'Royaume-Uni', Selected: false },
        { Name: 'Russie', Selected: false },
        { Name: 'Rwanda', Selected: false },
        { Name: 'Sahara occidental', Selected: false },
        { Name: 'Saint-Christophe-et-Niévès', Selected: false },
        { Name: 'Sainte-Hélène', Selected: false },
        { Name: 'Sainte-Lucie', Selected: false },
        { Name: 'Saint-Marin', Selected: false },
        { Name: 'Saint-Pierre-et-Miquelon', Selected: false },
        { Name: 'Saint-Siège', Selected: false },
        { Name: 'Saint-Vincent-et-les-Grenadines', Selected: false },
        { Name: 'Salvador', Selected: false },
        { Name: 'Samoa', Selected: false },
        { Name: 'Samoa américaines', Selected: false },
        { Name: 'Sao Tomé-et-Principe', Selected: false },
        { Name: 'Sénégal', Selected: false },
        { Name: 'Serbie', Selected: false },
        { Name: 'Seychelles', Selected: false },
        { Name: 'Sierra Leone', Selected: false },
        { Name: 'Singapour', Selected: false },
        { Name: 'Slovaquie', Selected: false },
        { Name: 'Slovénie', Selected: false },
        { Name: 'Somalie', Selected: false },
        { Name: 'Soudan', Selected: false },
        { Name: 'Southern Ocean', Selected: false },
        { Name: 'Spratly Islands', Selected: false },
        { Name: 'Sri Lanka', Selected: false },
        { Name: 'Suède', Selected: false },
        { Name: 'Suisse', Selected: false },
        { Name: 'Suriname', Selected: false },
        { Name: 'Swaziland', Selected: false },
        { Name: 'Syrie', Selected: false },
        { Name: 'Tadjikistan', Selected: false },
        { Name: 'Taïwan', Selected: false },
        { Name: 'Tanzanie', Selected: false },
        { Name: 'Tchad', Selected: false },
        { Name: 'Terres australes françaises', Selected: false },
        { Name: 'Territoire britannique de l"Océan Indien', Selected: false },
        { Name: 'Thaïlande', Selected: false },
        { Name: 'Timor Oriental', Selected: false },
        { Name: 'Togo', Selected: false },
        { Name: 'Tokélaou', Selected: false },
        { Name: 'Tonga', Selected: false },
        { Name: 'Trinité-et-Tobago', Selected: false },
        { Name: 'Tunisie', Selected: false },
        { Name: 'Turkménistan', Selected: false },
        { Name: 'Turquie', Selected: false },
        { Name: 'Tuvalu', Selected: false },
        { Name: 'Ukraine', Selected: false },
        { Name: 'Union européenne', Selected: false },
        { Name: 'Uruguay', Selected: false },
        { Name: 'Vanuatu', Selected: false },
        { Name: 'Venezuela', Selected: false },
        { Name: 'Viêt Nam', Selected: false },
        { Name: 'Wake Island', Selected: false },
        { Name: 'Wallis-et-Futuna', Selected: false },
        { Name: 'West Bank', Selected: false },
        { Name: 'Yémen', Selected: false },
        { Name: 'Zambie', Selected: false },
        { Name: 'Zimbabwe', Selected: false },
    ];

    $scope.editRecherche = function () {
    
        $http.delete('http://bluepenlabs.com/projects/voulezvous/api.php/recherche/',
        { "Content-Type": "application/json" }).then(function (s) { console.log(); }, function (e) { console.log(e); })
    
        $http.post('http://bluepenlabs.com/projects/voulezvous/api.php/recherche/',
            { "id_user": $scope.currentUser.id, "ageMin": "20", "ageMax": "40", "sexe": $scope.sexe, "distance": $scope.recherches.recherche.distance, "profile": $scope.profile },
            { "Content-Type": "application/json" }).then(function (s) { }, function (e) { console.log(e); })
        $scope.goMonprofile();
    }


    $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/personne/1').
        then(
            function (r) { console.log(r.data); $scope.personne = r.data; },
            function (e) { console.log(e) }
        );

    $scope.editProfilee = function () {

        $http.delete('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/personne/' + $scope.currentUser.id,
        { "Content-Type": "application/json" }).then(function (s) { console.log(); }, function (e) { console.log(e); })

        $http.post('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/personne/',
            {
                "id": $scope.currentUser.id,
                "id_fb": $scope.currentUser.id_fb,
                "nom": $scope.currentUser.nom,
                "prenom": $scope.currentUser.prenom,
                "surnom": $scope.personne.surnom,
                "age": $scope.currentUser.age,
                "adresse": $scope.currentUser.adresse,
                "description": $scope.currentUser.description,
                "profile": $scope.currentUser.profile,
                "datenaissance": $scope.currentUser.datenaissance,
                "recherche": $scope.currentUser.recherche,
                "fumeur": $scope.currentUser.fumeur,
                "alcool": $scope.currentUser.alcool,
                "enfants": $scope.currentUser.enfants,
                "nb_amis": $scope.currentUser.nb_amis,
                "nbr_credit": $scope.currentUser.nbr_credit,
                "img": $scope.currentUser.img
            },
            { "Content-Type": "application/json" }).then(function (s) {
                $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/personne/' + UserService.getCurrentUser.id + '?transform=1').
                            then(
                    function (r) { console.log(r.data); $scope.invitations = r.data;  },
                    function (e) { console.log(e) }
                )
            }, function (e) { console.log(e); })
        $scope.goMonprofile();
        window.location.reload(true);
    }

})

.controller('MsgCtrl', function ($scope, $http, UserService, $state, GetUserId, GetInvId, $ionicPopup, FriendsService, $ionicActionSheet, $timeout,$ionicScrollDelegate) {

    $scope.scrollDown = function () {
        $ionicScrollDelegate.scrollBottom();
    };

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
    
    $scope.annulerSuppBloq = function (idInvi) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Voulez Vous ...',
            template: 'annuler Supp/Bloq ?',
            cancelText: 'Annuler',
            okText: 'Continuer',
        });

        confirmPopup.then(function (res) {
            if (res) {
                $http.delete('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation/' + idInvi,
                { "Content-Type": "application/json" }).then(function (s) { console.log(); }, function (e) { console.log(e); })
                window.location.reload(true);
                console.log('Oui');
            } else {
                console.log('Non');
            }
        });
    };

    $scope.showConfirm = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Voulez Vous ...',
            template: 'Quitter le site avec moi ?',
            cancelText: 'Annuler',
            okText: 'Continuer',
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

    $scope.showSignSupp = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Voulez Vous ...',
            template: 'Signaler et supprimer ?',
            cancelText: 'Non',
            okText: 'Oui',
        });

        confirmPopup.then(function (res) {
            if (res) {
                console.log('Oui');
            } else {
                console.log('Non');
            }
        });
    };

    $scope.showBloqSupp = function (item) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Voulez Vous ...',
            cancelText: 'Non',
            okText: 'Oui',
        });

        confirmPopup.then(function (res) {
            if (res) {
                $scope.removeRecherche();
                $http.delete('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation/' + GetInvId.invId,
                { "Content-Type": "application/json" }).then(function (s) { console.log(); }, function (e) { console.log(e); })

                $http.post('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation/',
                    { "envoyer": "0", "bloquer": "1", "accepter": "0", "supprimer": "1", "inv_recepteurid": $scope.currentUser.id, "inv_emetteurid": item },
                    { "Content-Type": "application/json" }).then(function (s) {
                        $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation?transform=1').
                        then(
                            function (r) { console.log(r.data); $scope.invitations = r.data; },
                            function (e) { console.log(e) }
                        )
                    }, function (e) { console.log(e); })
                console.log('Oui');
            } else {
                console.log('Non');
            }
        });
    };
    
    $scope.removeRecherche = function (item) {
        var myEl = angular.element(document.querySelector('#divID'));
        myEl.remove();
    }

    
    $http.get('http://voulezvous.io/api/searchFiltered/' + 1).
                            then(
                    function (r) { console.log(r.data); $scope.ResultFilter = r.data; },
                    function (e) { console.log(e) }
                )

    $scope.showList = function (d) {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [
              { text: 'Supprimer' },
              { text: 'Bloquer et supprimer' },
              { text: 'Signaler et bloquer' }
            ],
            cancelText: 'Annuler',
            cancel: function () {
                // add cancel code..
            },
            buttonClicked: function (index) {
                if (index == 0) {
                    hideSheet();
                    $scope.removeRecherche(d);
                }
                if (index == 1) {
                    hideSheet();
                    $scope.showBloqSupp(d);
                }
                if (index == 2) {
                    hideSheet();
                    $scope.showSignSupp();
                }
            }
        });

        // For example's sake, hide the sheet after two seconds
        /*$timeout(function () {
            hideSheet();
        }, 2000);*/

    };

    $scope.showSuppAmis = function (item) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Voulez Vous ...',
            template: 'Supprimer ?',
            cancelText: 'Annuler',
            okText: 'Oui',
        });

        confirmPopup.then(function (res) {
            if (res) {
                $http.delete('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation/' + GetInvId.invId,
                { "Content-Type": "application/json" }).then(function (s) { console.log(); }, function (e) { console.log(e); })

                $http.post('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation/',
                    { "envoyer": "0", "bloquer": "0", "accepter": "0", "supprimer": "1", "inv_recepteurid": $scope.currentUser.id, "inv_emetteurid": item },
                    { "Content-Type": "application/json" }).then(function (s) {
                        $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation?transform=1').
                        then(
                            function (r) { console.log(r.data); $scope.invitations = r.data; },
                            function (e) { console.log(e) }
                        )
                    }, function (e) { console.log(e); })

                $http.delete('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/personne/' + $scope.currentUser.id,
                { "Content-Type": "application/json" }).then(function (s) { console.log(); }, function (e) { console.log(e); })

                $http.post('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/personne/',
                    {
                        "id": $scope.currentUser.id,
                        "id_fb": $scope.currentUser.id_fb,
                        "nom": $scope.currentUser.nom,
                        "prenom": $scope.currentUser.prenom,
                        "surnom": $scope.currentUser.surnom,
                        "age": $scope.currentUser.age,
                        "adresse": $scope.currentUser.adresse,
                        "description": $scope.currentUser.description,
                        "profile": $scope.currentUser.profile,
                        "datenaissance": $scope.currentUser.datenaissance,
                        "recherche": $scope.currentUser.recherche,
                        "fumeur": $scope.currentUser.fumeur,
                        "alcool": $scope.currentUser.alcool,
                        "enfants": $scope.currentUser.enfants,
                        "nb_amis": parseInt($scope.currentUser.nb_amis) - parseInt(1),
                        "nbr_credit": $scope.currentUser.nbr_credit,
                        "img": $scope.currentUser.img
                    },
                    { "Content-Type": "application/json" }).then(function (s) {
                        UserService.getCurrentUser();
                        window.location.reload(true);
                    }, function (e) { console.log(e); })
                console.log('Oui');
            } else {
                console.log('Non');
            }
        });
    };


    $scope.showConfirmInvi = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Voulez Vous ...',
            template: '<p>{{i.message}}</p>',
            cancelText: 'Annuler',
            okText: 'Accepter',
        });

        confirmPopup.then(function (res) {
            if (res) {
                $http.delete('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation/' + GetInvId.invId,
                { "Content-Type": "application/json" }).then(function (s) { console.log(); }, function (e) { console.log(e); })
                $scope.AcceptInvi();
                // ajouter +1 dans la table personne.nbr_amis
                $http.delete('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/personne/' + $scope.currentUser.id,
                { "Content-Type": "application/json" }).then(function (s) { console.log(); }, function (e) { console.log(e); })
                UserService.getCurrentUser();
                window.location.reload(true);
                $http.post('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/personne/',
                    {
                        "id": $scope.currentUser.id,
                        "id_fb": $scope.currentUser.id_fb,
                        "nom": $scope.currentUser.nom,
                        "prenom": $scope.currentUser.prenom,
                        "surnom": $scope.currentUser.surnom,
                        "age": $scope.currentUser.age,
                        "adresse": $scope.currentUser.adresse,
                        "description": $scope.currentUser.description,
                        "profile": $scope.currentUser.profile,
                        "datenaissance": $scope.currentUser.datenaissance,
                        "recherche": $scope.currentUser.recherche,
                        "fumeur": $scope.currentUser.fumeur,
                        "alcool": $scope.currentUser.alcool,
                        "enfants": $scope.currentUser.enfants,
                        "nb_amis": parseInt($scope.currentUser.nb_amis) + parseInt(1),
                        "nbr_credit": $scope.currentUser.nbr_credit,
                        "img": $scope.currentUser.img
                    },
                    { "Content-Type": "application/json" }).then(function (s) {
                        UserService.getCurrentUser();
                        window.location.reload(true);
                    }, function (e) { console.log(e); })
                console.log('Oui');
            } else {
                $/*http.delete('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation/' + GetInvId.invId,
                { "Content-Type": "application/json" }).then(function (s) { console.log(); }, function (e) { console.log(e); })
                UserService.getCurrentUser();
                window.location.reload(true);*/
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


    $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation?filter[]=bloquer,eq,1&filter[]=supprimer,eq,1&satisfy=any&transform=1').
        then(
            function (r) {
                console.log(r.data); $scope.invitationsVerif = r.data;
            },
            function (e) { console.log(e) }
        )

    $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation?transform=1').
        then(
            function (r) { console.log(r.data); $scope.invitations = r.data; },
            function (e) { console.log(e) }
        )

    $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/message?filter=msg_recepteurid,eq,' + GetUserId.userId + '?transform=1').
        then(
            function (r) { console.log(r.data); $scope.messageshistorique = r.data; },
            function (e) { console.log(e) }
        )

    $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/message?transform=1').
        then(
            function (r) { console.log(r.data); $scope.messagess = r.data; },
            function (e) { console.log(e) }
        )

    $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/message?filter[]=msg_recepteurid,eq,' + GetUserId.userId + '&filter[]=msg_emetteurid,eq,' + GetUserId.userId + '&satisfy=any&transform=1').
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

    $scope.showAlertAmisLimiteDiscussion = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Voulez Vous ?',
            template: 'Vous avez dépasser la limite 5 amis !'
        });

        alertPopup.then(function (res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };

    $scope.showAlertAmisLimite = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Voulez Vous ?',
            template: 'Vous avez plus que 5 amis'
        });

        alertPopup.then(function (res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };

    $scope.verifAmis = function () {
        UserService.getCurrentUser().then(
            function (r) {
                console.log(r.data); $scope.currentUser = r.data;
                if ($scope.currentUser.nb_amis > 5) {
                    //alert('Vous avez plus que 5 amis');
                    $scope.goDiscussionBloquer();
                    $scope.showAlertAmisLimite();
                }
                else
                    $scope.goDiscussion();
            },
            function (e) { console.log(e) }
        )
    }

    $scope.addMessage = function () {
        $scope.getDatetime = new Date();
        $http.post('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/message/',
            { "msg_emetteurid": $scope.currentUser.id, "msg_recepteurid": GetUserId.userId, "message": $scope.mmessage, "msg_timedatedenvoi": $scope.getDatetime },
            { "Content-Type": "application/json" }).then(function (s) {
                $scope.mmessage = null;
                $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/message?filter[]=msg_recepteurid,eq,' + GetUserId.userId + '&filter[]=msg_emetteurid,eq,' + GetUserId.userId + '&satisfy=any&transform=1').
                then(
                    function (r) { console.log(r.data); $scope.messages = r.data; },
                    function (e) { console.log(e) }
                )
            }, function (e) { console.log(e); })

    }

    $scope.getProfile = function (prof_id) {
        $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/personne/' + prof_id).
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

    $scope.AcceptInvi = function () {

        $http.post('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation/',
            { "envoyer": "0", "bloquer": "0", "accepter": "1", "supprimer": "0", "inv_recepteurid": $scope.currentUser.id, "inv_emetteurid": GetUserId.userId },
            { "Content-Type": "application/json" }).then(function (s) {
                $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation?transform=1').
                then(
                    function (r) { console.log(r.data); $scope.invitations = r.data; },
                    function (e) { console.log(e) }
                )
            }, function (e) { console.log(e); })
        $scope.goMessage();
    }

    $scope.deleteInvi = function () {
        $http.delete('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation/' + GetInvId.invId,
        { "Content-Type": "application/json" }).then(function (s) { console.log(); }, function (e) { console.log(e); })
        $state.go("home");
        $http.post('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation/',
            { "envoyer": "0", "bloquer": "0", "accepter": "0", "supprimer": "1", "inv_recepteurid": $scope.currentUser.id, "inv_emetteurid": GetUserId.userId },
            { "Content-Type": "application/json" }).then(function (s) {
                $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation?transform=1').
                then(
                    function (r) { console.log(r.data); $scope.invitations = r.data; },
                    function (e) { console.log(e) }
                )
            }, function (e) { console.log(e); })
        $scope.goMessage();
    }

    $scope.deleteProfilRech = function (userClickedId, inviClickedId) {
        GetUserId.userId = userClickedId;
        GetInvId.invId = inviClickedId;
        $http.delete('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation/' + GetInvId.invId,
        { "Content-Type": "application/json" }).then(function (s) { console.log(); }, function (e) { console.log(e); })
        $scope.goRecherche();
        $http.post('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation/',
            { "envoyer": "0", "bloquer": "0", "accepter": "0", "supprimer": "1", "inv_recepteurid": GetUserId.userId, "inv_emetteurid": $scope.currentUser.id },
            { "Content-Type": "application/json" }).then(function (s) {
                $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation?transform=1').
                then(
                    function (r) { console.log(r.data); $scope.invitations = r.data; },
                    function (e) { console.log(e) }
                )
            }, function (e) { console.log(e); })
    }


})

.controller('QueCtrl', function ($scope, $http) {
    $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/question/').
        then(
            function (r) { console.log(r.data); $scope.questions = r.data; },
            function (e) { console.log(e) }
        )
})

.controller('HomeCtrl', function ($scope, $http) {
    $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/personne/').
        then(
            function (r) { console.log(r.data); $scope.personnes = r.data; },
            function (e) { console.log(e) }
        )
})

.controller('ProfCtrl', function ($scope, $http, UserService, GetUserId, GetInvId, FriendsService, $ionicPopup, $ionicActionSheet, $timeout) {

    /*FriendsService.checkInvit(1, GetUserId.userId).then(
        function (r) {
            if ((GetUserId.userId ==  r.inv_recepteurid) && ($scope.invitations.inv_emetteurid == $scope.currentUser.id))
                $scope.isFriendOrInvited = true;
            else
                $scope.isFriendOrInvited = false;
        },
            function (e) { console.log(e) }
        )*/

    $scope.showSignSupp = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Voulez Vous ...',
            template: 'Signaler et supprimer ?',
            cancelText: 'Non',
            okText: 'Oui',
        });

        confirmPopup.then(function (res) {
            if (res) {
                console.log('Oui');
            } else {
                console.log('Non');
            }
        });
    };

    $scope.supp = function (x) {
        var divInterne = document.getElementById(x);
        var ancienNoeud = document.removeChild(divInterne);
    };

    $scope.showBloqSupp = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Voulez Vous ...',
            cancelText: 'Non',
            okText: 'Oui',
        });

        confirmPopup.then(function (res) {
            if (res) {
                $scope.BloqInvi();
                console.log('Oui');
            } else {
                console.log('Non');
            }
        });
    };

    $scope.show = function () {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [
              { text: 'Signaler et bloquer' },
              { text: 'Bloquer et supprimer' }
            ],
            cancelText: 'Annuler',
            cancel: function () {
                // add cancel code..
            },
            buttonClicked: function (index) {
                if (index == 0) {
                    hideSheet();
                    $scope.showSignSupp();
                }
                if (index == 1) {
                    hideSheet();
                    $scope.showBloqSupp();
                }
            }
        });

        // For example's sake, hide the sheet after two seconds
        /*$timeout(function () {
            hideSheet();
        }, 2000);*/

    };

    $scope.nbreCredit = function (nbrCredit) {
        // alert(nbrCredit);
        //alert($scope.currentUser.nbr_credit);
    }

    $scope.goInvitDetails = function (userClickedId) {
        GetUserId.userId = userClickedId;
        console.log(GetUserId);
    }

    $scope.BloqInvi = function () {

        $http.delete('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation/' + GetInvId.invId,
        { "Content-Type": "application/json" }).then(function (s) { console.log(); }, function (e) { console.log(e); })

        $http.post('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation/',
            { "envoyer": "0", "bloquer": "1", "accepter": "0", "supprimer": "1", "inv_recepteurid": $scope.currentUser.id, "inv_emetteurid": GetUserId.userId },
            { "Content-Type": "application/json" }).then(function (s) {
                $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation?transform=1').
                then(
                    function (r) { console.log(r.data); $scope.invitations = r.data; },
                    function (e) { console.log(e) }
                )
            }, function (e) { console.log(e); })
        $scope.goHome();
    }

    $scope.isFriendOrInvited = false;

    UserService.getAllUser().then(
            function (r) { console.log(r.data); $scope.personnes = r.data; },
            function (e) { console.log(e) }
        )

    UserService.getCurrentUser().then(
            function (r) { console.log(r.data); $scope.currentUser = r.data; },
            function (e) { console.log(e) }
        )

    $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/personne/' + GetUserId.userId).
        then(
            function (r) { console.log(r.data); $scope.personne = r.data; },
            function (e) { console.log(e) }
        );

    $http.get('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation?transform=1').
        then(
            function (r) {
                console.log(r.data); $scope.invitations = r.data;
            },
            function (e) { console.log(e) }
        );

    $scope.showAlertCredit = function () {
        var alertPopup = $ionicPopup.alert({
            title: '',
            template: 'Pas de Crédit !'
        });

        alertPopup.then(function (res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };

    $scope.sendInvi = function () {

        var promptPopup = $ionicPopup.prompt({
            title: 'Voulez Vous ?',
            okText: 'Envoyer',
            cancelText: 'Annuler'
        }).then(function (res) {
            if (res) {
                $scope.GetnbrCredit = parseInt($scope.currentUser.nbr_credit);
                if ($scope.GetnbrCredit <= 0) {
                    $scope.showAlertCredit();
                } else {
                console.log('Your input is ', res);
                $http.post('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation/',
                     { "envoyer": "1", "bloquer": "0", "accepter": "0", "supprimer": "0", "inv_recepteurid": GetUserId.userId, "inv_emetteurid": $scope.currentUser.id, "message": res },
                     { "Content-Type": "application/json" }).then(function (s) { $scope.goRecherche(); }, function (e) { console.log(e); })

                $http.delete('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/personne/' + $scope.currentUser.id,
                { "Content-Type": "application/json" }).then(function (s) { console.log(); }, function (e) { console.log(e); })

                UserService.getCurrentUser();
                window.location.reload(true);
                $http.post('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/personne/',
                    {
                        "id": $scope.currentUser.id,
                        "id_fb": $scope.currentUser.id_fb,
                        "nom": $scope.currentUser.nom,
                        "prenom": $scope.currentUser.prenom,
                        "surnom": $scope.currentUser.surnom,
                        "age": $scope.currentUser.age,
                        "adresse": $scope.currentUser.adresse,
                        "description": $scope.currentUser.description,
                        "profile": $scope.currentUser.profile,
                        "datenaissance": $scope.currentUser.datenaissance,
                        "recherche": $scope.currentUser.recherche,
                        "fumeur": $scope.currentUser.fumeur,
                        "alcool": $scope.currentUser.alcool,
                        "enfants": $scope.currentUser.enfants,
                        "nb_amis": $scope.currentUser.nb_amis,
                        "nbr_credit": parseInt($scope.currentUser.nbr_credit) - parseInt(1),
                        "img": $scope.currentUser.img
                    },
                    { "Content-Type": "application/json" }).then(function (s) {
                        UserService.getCurrentUser();
                        
                        
                    }, function (e) { console.log(e); })
                $scope.goRecherche();
                window.location.reload(true);
                }
            } else {
                console.log('Please enter input');
            }

        });

    }

    $scope.sendInviRech = function () {

        var promptPopup = $ionicPopup.prompt({
            title: 'Voulez Vous ?',
            okText: 'Envoyer',
            cancelText: 'Annuler'
        }).then(function (res) {
            if (res) {
                $scope.GetnbrCredit = parseInt($scope.currentUser.nbr_credit);
                if ($scope.GetnbrCredit <= 0) {
                    $scope.showAlertCredit();
                } else {
                    console.log('Your input is ', res);
                    $http.post('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/invitation/',
                         { "envoyer": "1", "bloquer": "0", "accepter": "0", "supprimer": "0", "inv_recepteurid": GetUserId.userId, "inv_emetteurid": $scope.currentUser.id, "message": res },
                         { "Content-Type": "application/json" }).then(function (s) { $scope.goRecherche(); }, function (e) { console.log(e); })

                    $http.delete('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/personne/' + $scope.currentUser.id,
                    { "Content-Type": "application/json" }).then(function (s) { console.log(); }, function (e) { console.log(e); })

                    UserService.getCurrentUser();
                    window.location.reload(true);
                    $http.post('http://bluepenlabs.com/projects/voulezvous/mobile/api.php/personne/',
                        {
                            "id": $scope.currentUser.id,
                            "id_fb": $scope.currentUser.id_fb,
                            "nom": $scope.currentUser.nom,
                            "prenom": $scope.currentUser.prenom,
                            "surnom": $scope.currentUser.surnom,
                            "age": $scope.currentUser.age,
                            "adresse": $scope.currentUser.adresse,
                            "description": $scope.currentUser.description,
                            "profile": $scope.currentUser.profile,
                            "datenaissance": $scope.currentUser.datenaissance,
                            "recherche": $scope.currentUser.recherche,
                            "fumeur": $scope.currentUser.fumeur,
                            "alcool": $scope.currentUser.alcool,
                            "enfants": $scope.currentUser.enfants,
                            "nb_amis": $scope.currentUser.nb_amis,
                            "nbr_credit": parseInt($scope.currentUser.nbr_credit) - parseInt(1),
                            "img": $scope.currentUser.img
                        },
                        { "Content-Type": "application/json" }).then(function (s) {
                            UserService.getCurrentUser();
                        }, function (e) { console.log(e); })
                    $scope.goRecherche();
                    window.location.reload(true);
                }
            } else {
                console.log('Please enter input');
            }
        });

    }

})

.factory('GetUserId', function () {
    return { userId: '' };
})

.factory('GetInvId', function () {
    return { invId: '' };
})

.filter('FilterRecherche', function () {
    return function () {


    }
})
;