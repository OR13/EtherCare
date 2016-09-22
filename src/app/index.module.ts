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



import { ContentViewV0Controller } from '../app/demo/capture/content_view_v0/content_view_v0.controller'
import { ecContentViewV0 } from '../app/demo/capture/content_view_v0/content_view_v0.directive'


import { TextInputV0Controller } from '../app/demo/capture/text_input_v0/text_input_v0.controller'
import { ecTextInputV0 } from '../app/demo/capture/text_input_v0/text_input_v0.directive'


import { BooleanInputV0Controller } from '../app/demo/capture/boolean_input_v0/boolean_input_v0.controller'
import { ecBooleanInputV0 } from '../app/demo/capture/boolean_input_v0/boolean_input_v0.directive'

declare var moment: moment.MomentStatic;
declare var jQuery: any;


angular.module('ethercareApp', [
    'ngMaterial',
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'angularMoment',
    'ui.router',
    'toastr',
    'LocalStorageModule',
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

    .controller('ContentViewV0Controller', ContentViewV0Controller)
    .directive('ecContentViewV0', ecContentViewV0)

    .controller('TextInputV0Controller', TextInputV0Controller)
    .directive('ecTextInputV0', ecTextInputV0)

    .controller('BooleanInputV0Controller', BooleanInputV0Controller)
    .directive('ecBooleanInputV0', ecBooleanInputV0)

    .directive('appNavbar', appNavbar)
    .directive('ethercareApp', ethercareApp)












