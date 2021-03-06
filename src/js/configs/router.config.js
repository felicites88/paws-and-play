angular
  .module('DogApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'vm'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'vm'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'vm'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl',
    controllerAs: 'vm'
  })
  .state('usersEdit', {
    url: '/users/:id/edit',
    templateUrl: '/js/views/users/edit.html',
    controller: 'UsersEditCtrl',
    controllerAs: 'vm'
  })
  .state('dogsIndex', {
    url: '/dogs/',
    templateUrl: '/js/views/dogs/home.html',
    controller: 'DogIndexCtrl',
    controllerAs: 'vm'
  })
  .state('dogsNew', {
    url: '/dogs/new',
    templateUrl: '/js/views/dogs/new.html',
    controller: 'DogNewCtrl',
    controllerAs: 'vm'
  })
  .state('dogsEdit', {
    url: '/dogs/:id/edit',
    templateUrl: '/js/views/dogs/edit.html',
    controller: 'DogsEditCtrl',
    controllerAs: 'vm'
  })
  .state('dogsShow', {
    url: '/dogs/:id',
    templateUrl: '/js/views/dogs/show.html',
    controller: 'DogShowCtrl',
    controllerAs: 'vm'
  })

  .state('walksNew', {
    url: '/dogs/:id/walks',
    templateUrl: '/js/views/walks/new.html',
    controller: 'WalkNewCtrl',
    controllerAs: 'vm'
  })

  ;

  $urlRouterProvider.otherwise('/');
}






// Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
// function Router($stateProvider, $urlRouterProvider, $locationProvider ) {
//   $locationProvider.html5Mode(true);
//   $stateProvider
//   .state('dogsIndex', {
//     url: '/',
//     templateUrl: '/js/views/dogs/home.html',
//     controller: 'DogIndexCtrl',
//     controllerAs: 'dogs'
//   })
//   .state('dogsNew', {
//     url: '/dogs/new',
//     templateUrl: '/js/views/dogs/new.html',
//     controller: 'DogNewCtrl',
//     controllerAs: 'dogs'
//   })
//   .state('dogsEdit', {
//     url: '/dogs/:id/edit',
//     templateUrl: '/js/views/dogs/edit.html',
//     controller: 'DogsEditCtrl',
//     controllerAs: 'dogs'
//   })
//   .state('dogsShow', {
//     url: '/dogs/:id',
//     templateUrl: '/js/views/dogs/show.html',
//     controller: 'DogShowCtrl',
//     controllerAs: 'dogs'
//   });
//
//
//
//   $urlRouterProvider.otherwise('/');
// }
