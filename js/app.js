// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('login', {
        url: '/',
        templateUrl: '/login.html',
        controller: 'loginCtrl'
    })
    $stateProvider
    .state('index', {
        url: '/',
        templateUrl: '/index.html',
        controller: 'AppCtrl'
    })
    $stateProvider
    .state('test', {
        url: '/',
        templateUrl: '/test.html',
        controller: 'AppCtrl'
    })
    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'MyprofCtrl'
    })
    .state('monprofile', {
        url: '/monprofile',
        templateUrl: 'templates/monprofile.html',
        controller: 'MyprofCtrl'
    })
    .state('monProfilee', {
        url: '/monProfilee',
        templateUrl: 'templates/monProfilee.html',
        controller: 'MyprofCtrl'
    })
    .state('listeSuppBloq', {
        url: '/listeSuppBloq',
        templateUrl: 'templates/listeSuppBloq.html',
        controller: 'MsgCtrl'
    })
    .state('editProfile', {
        url: '/editProfile',
        templateUrl: 'templates/editProfile.html',
        controller: 'MyprofCtrl'
     })
    .state('recherche', {
        url: '/recherche',
        templateUrl: 'templates/recherche.html',
        controller: 'MsgCtrl'
    })
    .state('voyage', {
        url: '/voyage',
        templateUrl: 'templates/voyage.html',
        controller: 'MyprofCtrl'
    })
    .state('message', {
        url: '/message',
        templateUrl: 'templates/message.html',
        controller: 'MsgCtrl'
    })
     .state('album', {
         url: '/album',
         templateUrl: 'templates/album.html',
         controller: 'AlbCtrl'
     })
    .state('question', {
        url: '/question',
        templateUrl: 'question.html',
        controller: 'QueCtrl'
    })
    .state('discussion', {
        url: '/discussion',
        templateUrl: 'templates/discussion.html',
        controller: 'MsgCtrl'
    })
    .state('discussionBloquer', {
        url: '/discussionBloquer',
        templateUrl: 'templates/discussionBloquer.html',
        controller: 'MsgCtrl'
    })
    .state('profile', {
        url: '/profile',
        templateUrl: 'templates/profile.html',
        controller: 'ProfCtrl'
    })
    .state('historique', {
        url: '/historique',
        templateUrl: 'templates/historique.html',
        controller: 'MsgCtrl'
    })
    .state('historiqueDiscussion', {
        url: '/historiqueDiscussion',
        templateUrl: 'templates/historiqueDiscussion.html',
        controller: 'MsgCtrl'
    })
    .state('recherchePerso', {
        url: '/recherchePerso',
        templateUrl: 'templates/recherchePerso.html',
        controller: 'MyprofCtrl'
    })
    .state('visibilitePerso', {
        url: '/visibilitePerso',
        templateUrl: 'templates/visibilitePerso.html',
        controller: 'MyprofCtrl'
    })
    .state('credit', {
        url: '/credit',
        templateUrl: 'templates/credit.html',
        controller: 'MyprofCtrl'
    })
    .state('invitation', {
        url: '/invitation',
        templateUrl: 'templates/invitation.html',
        controller: 'ProfCtrl'
    })
    .state('confirmationQuitter', {
        url: '/confirmationQuitter',
        templateUrl: 'templates/confirmationQuitter.html',
        controller: 'MsgCtrl'
    })

    $urlRouterProvider.otherwise(function ($injector, $location) {
        var $state = $injector.get("$state");
        $state.go("recherche");
    })

})

.directive('hideTabs', function ($rootScope) {
    return {
        restrict: 'A',
        link: function ($scope, $el) {
            $rootScope.hideTabs = true;
            $scope.$on('$destroy', function () {
                $rootScope.hideTabs = false;
            });
        }
    };
})

window.fbAsyncInit = function () {
    FB.init({
        appId: '1686170128368489',
        xfbml: true,
        version: 'v2.8'
    });
    FB.AppEvents.logPageView();
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));