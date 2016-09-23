
import {IRootScopeService } from '../index.run';

import {IPatient, IActivitySpec, ActivityInstanceStatus, ComponentTypes, IActivityInstance} from './ethercare.service';


declare var KeenAsync: any;
declare var ace: any;
export class DemoController {

    public patient: IPatient;

    public ct: any;

    public ipfs_image: string;

    public ethereum_editor: any;


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


            this.$rootScope.App.EtherCareService.loadIpfsImage();

        });

        this.ct = ComponentTypes;


    }

    public aceLoaded = (_editor) => {

        this.ethereum_editor = _editor

        this.$rootScope.$watch(() => {
            return this.$rootScope.App.EthereumService.accounts;
        }, (accounts) => {
            var ed_val = JSON.stringify(this.$rootScope.App.EthereumService.accounts);
            this.$log.debug(' heard ed_val ', ed_val)

            if (ed_val) {
                this.ethereum_editor.setValue(ed_val);
                this.ethereum_editor.setReadOnly(true);
            }

        })

        // Editor part
        var _session = _editor.getSession();
        var _renderer = _editor.renderer;



        // Options

        _session.setUndoManager(new ace.UndoManager());
        _renderer.setShowGutter(false);

        // Events
        // _editor.on("changeSession", function () { });
        // _session.on("change", function () { });
    };

    public aceChanged = (e) => {
        //
    };




}


