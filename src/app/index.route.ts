/** @ngInject */
export function routerConfig($stateProvider: any, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
  $stateProvider
    .state('demo', {
      url: '/:account_id',
      templateUrl: 'app/demo/demo.html',
      controller: 'DemoController',
      controllerAs: 'demoCtrl'
    });

  var w: any = window;
  $urlRouterProvider.otherwise('/' + w.web3.eth.accounts[0]);
}
