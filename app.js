(function(){

var app = angular.module('app', []);
app.controller('appController', function(){
	this.personne = "object";
});

/*app.controller('homeController', function(){

});*/

app.directive('home',
return{
	restrict : 'A',
	templateUrl : '/partials/home/home.html',
});




  var object = {
    name : "Tian Bao",
    age : 2,
    skills : ['Manger', 'Jouer'],
    image : 'img/panda.jpg'
  };
})();
