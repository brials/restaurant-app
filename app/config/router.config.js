'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('', '/join#signup');
  $urlRouterProvider.when('/', '/joinn#signup');
  $urlRouterProvider.when('/signup', '/join#signup');
  $urlRouterProvider.when('/login', '/join#login');

  let states = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      conrtollerAs: 'homeCtrl'
    },
    {
      name: 'landing',
      url: '/join',
      template: require('../view/landing/landing.html'),
      controller: 'LandingController',
      controllerAs: 'landingCtrl',
    }
    //TODO thing of some more views to include.
  ];

  states.forEach(state => {
    $stateProvider.state(state);
  });
}
