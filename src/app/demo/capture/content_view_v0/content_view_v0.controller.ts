import {IRootScopeService} from '../../../index.run';

/** @ngInject */
export class ContentViewV0Controller {


    constructor(
        public $window: angular.IWindowService,
        private $scope: angular.IScope,
        private $log: angular.ILogService,
        public $rootScope: IRootScopeService,
        private $mdSidenav: angular.material.ISidenavService

    ) {


    }

}