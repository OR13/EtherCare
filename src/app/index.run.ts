
import {EthereumService} from './demo/ethereum.service'

export interface IEtherCareConfig {
    Version: string;
    EthereumService: EthereumService;
}

export interface IRootScopeService extends angular.IRootScopeService {
    App: IEtherCareConfig

}

/** @ngInject */
export function runBlock(
    $location: any,
    $timeout: angular.ITimeoutService,
    $log: angular.ILogService,
    $rootScope: IRootScopeService,
    $state: any,
    EthereumService: EthereumService
) {

    var w = <any>window;

    $rootScope.App = <IEtherCareConfig>{};

    $rootScope.App.Version = '0.0.0';

    $rootScope.App.EthereumService = EthereumService;

    $rootScope.$on('$stateChangeStart', function (evt, to, params) {
        if (to.redirectTo) {
            evt.preventDefault();
            $state.go(to.redirectTo, params, { location: 'replace' })
        }
    });

    // $log.debug('App', $rootScope.App);

}
