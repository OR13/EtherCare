
import {IRootScopeService} from '../index.run';
import {SecurityService} from './security.service';

export class EthereumService {

    public web3: any;

    /** @ngInject */
    constructor(
        private $timeout: angular.ITimeoutService,
        private $log: angular.ILogService,
        private $http: angular.IHttpService,
        private $window: angular.IWindowService,
        private $q: angular.IQService,
        private $mdToast: angular.material.IToastService,
        private $state: any,
        private $rootScope: IRootScopeService
    ) {

        var w: any = window;
        this.web3 = w.web3;
        this.$log.debug('web3.eth.accounts: ', w.web3.eth.accounts);

    }



}