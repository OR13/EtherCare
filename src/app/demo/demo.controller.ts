
import {IRootScopeService } from '../index.run';

import {IPatient, IActivitySpec, ActivityInstanceStatus, ComponentTypes, IActivityInstance} from './ethercare.service';


declare var KeenAsync: any;
export class DemoController {

    public patient: IPatient;

    public ct: any;

    /* @ngInject */
    constructor(
        public $scope: angular.IScope,
        public $mdSidenav: angular.material.ISidenavService,
        public $http: angular.IHttpService,
        public $log: angular.ILogService,
        public $rootScope: IRootScopeService,
        public $timeout: angular.ITimeoutService,
        public $interval: angular.IIntervalService,
        public $sce: angular.ISCEService,
        public $mdDialog: any,
        public toastr: any
    ) {
        this.patient = this.$rootScope.App.EtherCareService.patients[0];
        this.$rootScope.App.EtherCareService.scheduleActivities();

        KeenAsync.ready(() => {
            this.$rootScope.App.EtherCareService.renderLast100PatientSnapshots();
            this.$rootScope.App.EtherCareService.renderPageViews();
            
        });

        this.ct = ComponentTypes;
        
    }

}


