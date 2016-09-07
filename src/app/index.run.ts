
import {EthereumService} from './demo/ethereum.service'
import {IpfsService} from './demo/ipfs.service'

export interface IEtherCareConfig {
    Version: string;
    EthereumService: EthereumService;
    IpfsService: IpfsService;
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
    EthereumService: EthereumService,
    IpfsService: IpfsService
) {

    var w = <any>window;

    $rootScope.App = <IEtherCareConfig>{};

    $rootScope.App.Version = '0.0.0';

    $rootScope.App.EthereumService = EthereumService;
    $rootScope.App.IpfsService = IpfsService;

    $rootScope.$on('$stateChangeStart', function (evt, to, params) {
        if (to.redirectTo) {
            evt.preventDefault();
            $state.go(to.redirectTo, params, { location: 'replace' })
        }
    });

    // $log.debug('App', $rootScope.App);

}
