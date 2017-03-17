// declaring Angular App
var app = angular.module('MyApp',['ngMaterial', 'ngResource', 'ngMessages', 'material.svgAssetsCache']);

// Main Controller
app.controller('AppCtrl', function($scope, $mdDialog) {
  $scope.status = '  ';
  $scope.customFullscreen = false;
  $scope.teamDetails = {
    "teamName": "",
    "teamMemberName": ""
  }

  // Opening Modal popup
  $scope.openModal = function(ev) {
    $mdDialog.show({
      controller: 'DialogController',
      templateUrl: 'dialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen
    })
    .then(function(val) {
      if(val.team != 'undefined' && val.team != null) {
        $scope.teamDetails.teamName = val.team;
      }
      else {
        $scope.teamDetails.teamName = "";
      }
      if(val.teamMember != 'undefined' && val.teamMember != null) {
        $scope.teamDetails.teamMemberName = val.teamMember;
      }
      else {
        $scope.teamDetails.teamMemberName = "";
      }
      $scope.status = 'You Clicked ok';

    });
  };
});

// A service to get the data from teams static json file
app.factory('wholeData', function($resource) {
  var data = null;
  if (data) {
    return data;
  } else {
    data = $resource('data/teamMembers.json');
    return data;
  }
});

// Modal Controller
app.controller('DialogController', function($scope, $mdDialog, wholeData) {

  // initial values
  $scope.selectedTeamMemberId = 0;
  $scope.selectedTeamId = 0;
  $scope.selectedTeamData = null;
  $scope.teamNameText = null;
  $scope.selectedTeamMemberData = null;
  $scope.teamMemberName = null;
  $scope.teamMembers = null;
  $scope.teams = null;

  // Returns team and teamMembers as an object
  var getTeamAndTeamMember = function() {
    return {
      "team": $scope.teamNameText,
      "teamMember": $scope.teamMemberName
    }
  }

  $scope.hide = function() {
    $mdDialog.hide(getTeamAndTeamMember());
  };

  // When "X" is clicked
  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  // When "OK" is clicked
  $scope.clickOk = function() {
    $mdDialog.hide(getTeamAndTeamMember());
  };

  // fetching data from wholeData Service
  $scope.teams = wholeData.query();

  $scope.teams.$promise.then(function (result) {
    $scope.teams = result;
    console.log("$scope.teams", $scope.teams);
  });

  /* Team Related functionality */

  // When ever teamName in typed
  $scope.teamNameInput = function() {
    var filteredData = _.filter($scope.teams, function(o) {
      // if(o.team.toUpperCase().startsWith($scope.teamNameText.toUpperCase())) {
      if(o.team.toUpperCase() === $scope.teamNameText.toUpperCase()) {
        return true;
      }
      else {
        return false;
      }
    });
    // populate filtered Data
    processTeamMembers(filteredData[0]);
  }

  /*
    TODO:
    => Auto Complete/Suggeting the team/team members names
  */

  $scope.teamSelected = function() {
    // populate teamMembers with the selectedTeam Value
    var selectedData = getTeamWithID();
    processTeamMembers(selectedData);
  };

  var processTeamMembers = function(selectedData) {
    if(typeof selectedData != 'undefined' && selectedData != null) {
      $scope.selectedTeamData = selectedData;
      setTeamName();
      populateTeamMembers();
    }
    else {
      $scope.selectedTeamData = null;
      $scope.teamNameText = null;
      $scope.teamMembers = null;
    }
  }

  var getTeamWithID = function() {
    var selectedTeam = _.find($scope.teams, function(team) {
      return team.id == $scope.selectedTeamId;
    });
    return selectedTeam;
  }

  var setTeamName = function() {
    $scope.teamNameText = $scope.selectedTeamData.team;
  }

  var populateTeamMembers = function() {
    clearTeamMemberName();
    $scope.teamMembers = $scope.selectedTeamData.members;
    // assigning team member to zero
    $scope.selectedTeamMemberId = 0;
  }

  /* Team Member Related functionality */

  $scope.teamMemberNameInput = function() {
    var filteredTeamMembers = _.filter($scope.teamMembers, function(o) {
      // if(o.team.toUpperCase().startsWith($scope.teamNameText.toUpperCase())) {
      if(o.name.toUpperCase() === $scope.teamMemberName.toUpperCase()) {
        return true;
      }
      else {
        return false;
      }
    });
    processTeamMemberName(filteredTeamMembers[0]);
  }

  $scope.teamMemberSelected = function() {
    var selectedTeamMember = getTeamMemberWithID();
    processTeamMemberName(selectedTeamMember);
  };

  var processTeamMemberName = function(teamMember) {
    if(typeof teamMember != 'undefined' && teamMember != null) {
      $scope.selectedTeamMemberData = teamMember;
      setTeamMemberName();
    }
    else {
      $scope.selectedTeamMemberData = null;
      clearTeamMemberName();
    }
  }

  var setTeamMemberName = function() {
    $scope.teamMemberName = $scope.selectedTeamMemberData.name;
  };

  var clearTeamMemberName = function() {
    $scope.teamMemberName = null;
  };

  var getTeamMemberWithID = function() {
    var selectedTeamMember = _.find($scope.teamMembers, function(teamMember) {
      return teamMember.id == $scope.selectedTeamMemberId;
    });
    return selectedTeamMember;
  }
});
