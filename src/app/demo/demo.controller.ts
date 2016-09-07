
import {IRootScopeService } from '../index.run';

export class DemoController {

    public isLoading: boolean;
    public isUserLoggedIn: boolean;
  
    public newMessageText: string;

    /* @ngInject */
    constructor(
        public $scope: angular.IScope,
        public $mdSidenav: angular.material.ISidenavService,
        public $http: angular.IHttpService,
        public $log: angular.ILogService,
        public $rootScope: IRootScopeService,
        public $timeout: angular.ITimeoutService,
        public $interval: angular.IIntervalService,
        public toastr: any
    ) {

    }


}
