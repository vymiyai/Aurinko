'use strict';

function NewGameController( $scope, Profiles, Profile ) 
{
    $scope.profiles = Profiles;
    $scope.button = { value:"Back", href:"#/main_menu" };
        
    $scope.submit = function( profileName )
    { 
        Profile.profileId = profileName;
    };
}