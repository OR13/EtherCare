/** @ngInject */
export function routerConfig($stateProvider: any, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
  $stateProvider
    .state('demo', {
      url: '/',
      templateUrl: 'app/demo/demo.html',
      controller: 'DemoController',
      controllerAs: 'demoCtrl'
    })

   
  
  $urlRouterProvider.otherwise('/');
}
