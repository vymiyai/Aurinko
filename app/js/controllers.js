'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MainMenuController', [ '$scope', '$document', function($scope, $document) {
        // define buttons for the menu.
        $scope.buttons = [  { value:"New Game",   href:"#/new_game" },
                            { value:"Load Game",  href:"#/load_game" },
                            { value:"Quit",       href:"#" } ];
                            
        $scope.wololo = false;
        
        $scope.trololol = function (){ $scope.wololo = true; };
    }])
    .controller('NewGameController', [ '$scope', "Profiles", "Profile", function( $scope, profiles, profile ) {
        $scope.profiles = profiles;
        $scope.button = { value:"Back", href:"#/main_menu" };
        
        $scope.submit = function( profileName )
        { 
            profile.profileId = profileName;
        };
    }])
    .controller('LoadGameController', [ '$scope', 'Profiles', 'Profile', function($scope, profiles, profile) {
        $scope.profiles = profiles;
        $scope.button = { value:"Back", href:"#/main_menu" };
        
        $scope.submit = function( profileName )
        { 
            profile.profileId = profileName;
        };
    }])
    .controller('EscaveController', [ '$scope', 'CharacterCards', function( $scope, characterCards ) {
        //alert( JSON.stringify(characterCards) );
        $scope.hide = false;
    }])
    .controller('EscaveCinematicsController', [ '$scope', 'Profile', '$location', function( $scope, profile, $location ) {
        //alert( profile.profileId );
        
        // receber o json de profile, analisar qual animacao ser exibida (se necessario).
        //getAnimation(profile)
        
        $scope.cinematic = "hide";
        $scope.destination = "/escave";
        
        //hide( 500, function(){ alert("wololo"); $location.path( "/login" ); } ); 
        //$scope.animate = animation.getAnimation( $location );
        
        // substituir o "onload" do elemento pela animacao (sequencia de operacoes em jquery)
        
        // ao final da animacao, invocar callback e redirecionar para escave.
        
        
    }]);