var app= angular.module("app",['ui.bootstrap', 'ngDragDrop']);

app.controller('TabsCtrl', function($scope){
  $scope.tabs = [ {title: 'Tab 2', content: 'Tab content 2'},
                              {title: 'Tab 3', content: 'Tab content 3'}];
  $scope.firstname;
});
app.factory('messages',function(){
  var messages = {};
 messages.list = [];
 messages.add = function(message){
   messages.list.push({id: messages.list.length, text: message});
 };
 return messages;
});
app.controller('ListCtrl', function(messages){
  var self = this;
   self.messages = messages.list;
});
app.controller('PostCtrl', function (messages){
 var self = this;
 self.newMessage = 'Hello World!';
 self.addMessage = function(message){
   messages.add(message);
   self.newMessage = '';
 };
});

app.factory('getData', getData).run(function(getData){
  var promise = getData()
  .then(function(num){
    console.log(num);
    return num *2})
    .then(function(num){
      console.log(num)
    });
  });

function getData($timeout, $q){
  return function() {
    return $q(function(resolve, reject){
      $timeout(function(){
        resolve(Math.floor(Math.random()*10))
      },2000);
    });
  };
};

app.directive('welcomee', function(){
  return{
    restrict: "E",
    template: "<div>Welcome Element!</div>"
  };
});
app.directive('welcomea', function(){
  return{
    restrict: "A",
    link: function(){
      alert("Welcome Attribute!!");
    }
  };
});
app.directive('goodbyea', function(){
  return{
    restrict: "A",
    link: function(){
      alert("Later!");
    }
  };
});
app.directive('welcomec',function(){
  return{
    restrict: "C",
    link: function(){
      alert("Welcome Class!!!");
    }
  };
});
app.directive('welcomem', function(){
  return{
    restrict: "M",
    link: function(){
      alert("Welcome Comment!!!!");
    }
  };
});
app.controller('oneCtrl', function($scope, $timeout) {
  $scope.list1 = [];
  $scope.list2 = [];
  $scope.list3 = [];
  $scope.list4 = [];
  $scope.list5 = [
    { 'title': 'Item 1', 'drag': true },
    { 'title': 'Item 2', 'drag': true },
    { 'title': 'Item 3', 'drag': true },
    { 'title': 'Item 4', 'drag': true },
    { 'title': 'Item 5', 'drag': true },
    { 'title': 'Item 6', 'drag': true },
    { 'title': 'Item 7', 'drag': true },
    { 'title': 'Item 8', 'drag': true }
  ];
  // Limit items to be dropped in list1
  $scope.optionsList1 = {
    accept: function(dragEl) {
      if ($scope.list1.length >= 2) {
        return false;
      } else {
        return true;
      }
    }
  };
});
