var test = angular.module('test',['dndLists','ui.bootstrap']);

test.controller('testCtrl',function($scope){
      $scope.models = {
          selected: null,
          lists: {"A": [{"label":"Derp"},{"label":"Herp"}], "B": []}
      };
      for (var i = 1; i <= 3; ++i ) {
          $scope.models.lists.A.push({label: "Item A" + i});
          $scope.models.lists.B.push({label: "Item B" + i});
      }
  });

  test.controller('NestedDemo',function($scope){
  $scope.models = {
          selected: null,
          templates: [
              {type: "item", id: 2},
              {type: "container", id: 1, columns: [[], []]},
              {type: "value",id: 3, last: [[],[],[]]}
          ],
          dropzones: {
           "A": [
               {
                   "type": "container",
                   "id": 1,
                   "columns": [
                       [
                           {
                               "type": "item",
                               "id": "1",
                               "last":[
                                   {
                                       "type":"value",
                                       "id":"3"
                                   }
                               ]
                           }
                       ],
                           [
                           {
                               "type": "item",
                               "id": "2"
                           }
                       ],
                       [
                           {
                               "type": "item",
                               "id": "3"
                           }
                       ]
                   ]
               },
               {
                   "type": "item",
                   "id": "4"
               },
               {
                   "type": "item",
                   "id": "5"
               },
               {
                   "type": "item",
                   "id": "6"
               }
           ],
           "B": [
               {
                   "type": "item",
                   "id": 7
               },
               {
                   "type": "item",
                   "id": "8"
               },
               {
                   "type": "container",
                   "id": "2",
                   "columns": [
                       [
                           {
                               "type": "item",
                               "id": "9"
                           },
                           {
                               "type": "item",
                               "id": "10"
                           },
                           {
                               "type": "item",
                               "id": "11"
                           }
                       ],
                       [
                           {
                               "type": "item",
                               "id": "12"
                           },
                           {
                               "type": "container",
                               "id": "3",
                               "columns": [
                                   [
                                       {
                                           "type": "item",
                                           "id": "13"
                                       }
                                   ],
                                   [
                                       {
                                           "type": "item",
                                           "id": "14"
                                       }
                                   ]
                               ]
                           },
                           {
                               "type": "item",
                               "id": "15"
                           },
                           {
                               "type": "item",
                               "id": "16"
                           }
                       ]
                   ]
               },
               {
                   "type": "item",
                   "id": 16
               }
           ],
           "C":[
               {"type":"item",
                "id":"1"}
           ]
       }
      };
  });

  test.controller('ModalDemoCtrl', function ($scope, $modal, $log) {
          $scope.result = [];
          $scope.firstnamelabel = "First Name";
          $scope.firstname;
          $scope.lastnamelabel = "Last Name";
          $scope.lastname;
          $scope.submit = function(){
                  if ($scope.firstname){
                          $scope.result.push(this.firstnamelabel + "':'" + this.firstname);
                          $scope.firstname = '';
                  }
                  if ($scope.lastname){
                         $scope.result.push(this.lastnamelabel +"':'" + this.lastname);
                          $scope.lastname = '';
                  }
          };
  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        result: function () {
          return $scope.result;
  }
    }
    });
};
  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

test.controller('ModalInstanceCtrl', function ($scope, $modalInstance,result) {

        $scope.result = result;
  $scope.ok = function () {
    $modalInstance.dismiss();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss();
  };
});
