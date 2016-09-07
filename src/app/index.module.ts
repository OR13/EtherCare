/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from '../app/index.config';
import { routerConfig } from '../app/index.route';
import { runBlock } from '../app/index.run';
import { DemoController } from '../app/demo/demo.controller';

import { SecurityService} from '../app/demo/security.service';
import { EthereumService} from '../app/demo/ethereum.service';
import { IpfsService} from '../app/demo/ipfs.service';

import { EtherCareService} from '../app/demo/ethercare.service';

import { appNavbar } from '../app/navbar/navbar';
import { ethercareApp } from '../app/app.directive'

declare var moment: moment.MomentStatic;
declare var jQuery: any;


angular.module('ethercareApp', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'angularMoment',
    'ui.router',
    'ngMaterial',
    'toastr',
    'LocalStorageModule'
])

    .constant('moment', moment)


    .config(config)
    .config(routerConfig)


    .run(runBlock)

    .service('EthereumService', EthereumService)
    .service('SecurityService', SecurityService)
    .service('EtherCareService', EtherCareService)


    .service('IpfsService', IpfsService)

    .controller('DemoController', DemoController)


    .directive('appNavbar', appNavbar)
    .directive('ethercareApp', ethercareApp)







