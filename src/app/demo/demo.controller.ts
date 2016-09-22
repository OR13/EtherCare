
import {IRootScopeService } from '../index.run';

import {IPatient, IActivitySpec, ActivityInstanceStatus, ComponentTypes, IActivityInstance} from './ethercare.service';

export class DemoController {

    public patients: Array<IPatient>;

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
        this.patients = this.$rootScope.App.EtherCareService.patients;
        this.$rootScope.App.EtherCareService.scheduleActivities();
    }

    public completeNextInstance = (patient: IPatient, event) => {

        var next_instance = this.$rootScope.App.EtherCareService.getNextInstance(patient);

        if (next_instance === null) {
            this.$log.debug('no instance', next_instance);
            return;
        }

        this.$log.debug('pulled highest priority instance ', next_instance);

        switch (next_instance.activity_spec.render_config.component) {
            case ComponentTypes.text_input_v0: this.capture_text_input_v0(event, patient, next_instance);
            case ComponentTypes.boolean_input_v0: this.capture_boolean_v0(event, patient, next_instance);
            case ComponentTypes.content_view_v0: this.capture_content_view_v0(event, patient, next_instance);
        }

    }

    public capture_text_input_v0 = (event, patient: IPatient, instance: IActivityInstance) => {

        this.$mdDialog.show({
            scope: this.$scope,         // use parent scope in template
            preserveScope: true,  // do not forget this if passing parent scope
            controller: ['$scope', '$sce', '$log', ($scope, $sce, $log) => {

                $scope.instance = instance;
                $scope.patient = instance;


                $scope.hide = () => {
                    this.$mdDialog.hide();
                };

                $scope.cancel = () => {
                    this.$mdDialog.cancel();
                };

                $scope.submit = () => {


                    $log.debug('patient snapshot: ', $scope.patient)

                    var indexOfInst = patient.activity_instances.indexOf(instance);

                    //remove this instance
                    $scope.activity_instances.splice(indexOfInst, 1);

                    this.$mdDialog.hide(instance.capture.value);

                    // this.keen_client.recordEvent('feelings', {
                    //         //     //     feelings: feelings
                    //         //     // });
                };

            }],
            templateUrl: '/app/demo/capture/text_input_v0/text_input_v0.partial.html',
            parent: angular.element(document.body),
            // targetEvent: event,
            clickOutsideToClose: true,
            // fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
    };

    public capture_content_view_v0 = (event, patient: IPatient, instance: IActivityInstance) => {

        this.$mdDialog.show({
            scope: this.$scope,         // use parent scope in template
            preserveScope: true,  // do not forget this if passing parent scope
            controller: ['$scope', '$sce', '$log', ($scope, $sce, $log) => {

                $scope.instance = instance;
                $scope.patient = patient;

                $scope.video_url = $sce.trustAsResourceUrl(instance.activity_spec.schema_config.video_url);

                $scope.hide = () => {
                    this.$mdDialog.hide();
                };

                $scope.cancel = () => {
                    this.$mdDialog.cancel();
                };

                $scope.rate = (rating: number) => {

                    instance.capture.value = rating;

                    $log.debug('patient snapshot: ', $scope.patient)

                    var indexOfInst = patient.activity_instances.indexOf(instance);

                    //remove this instance
                    $scope.patient.activity_instances.splice(indexOfInst, 1);

                    this.$mdDialog.hide(instance.capture.value);

                    // this.keen_client.recordEvent('feelings', {
                    //         //     //     feelings: feelings
                    //         //     // });
                };

            }],
            templateUrl: '/app/demo/capture/content_view_v0/content_view_v0.partial.html',
            parent: angular.element(document.body),
            // targetEvent: event,
            clickOutsideToClose: true,
            // fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
    };

    // public capture_boolean_v0 = (event, patient: IPatient, instance: IActivityInstance) => {
    //     this.$mdDialog.show({
    //         scope: this.$scope,         // use parent scope in template
    //         preserveScope: true,  // do not forget this if passing parent scope
    //         controller: ['$scope', '$sce', '$log', ($scope, $sce, $log) => {

    //             $scope.instance = instance;
    //             $scope.patient = patient;

    //             $scope.video_url = $sce.trustAsResourceUrl(instance.activity_spec.schema_config.video_url);

    //             $scope.hide = function () {
    //                 this.$mdDialog.hide();
    //             };

    //             $scope.cancel = function () {
    //                 this.$mdDialog.cancel();
    //             };

    //             $scope.submit = function (bit) {

    //                 instance.capture.value = bit;

    //                 $log.debug('patient snapshot: ', $scope.patient)

    //                 var indexOfInst = patient.activity_instances.indexOf(instance);

    //                 //remove this instance
    //                 $scope.patient.activity_instances.splice(indexOfInst, 1);

    //                 this.$mdDialog.hide(instance.capture.value);


    //                 // this.keen_client.recordEvent('feelings', {
    //                 //         //     //     feelings: feelings
    //                 //         //     // });
    //             };

    //         }],
    //         templateUrl: '/app/demo/capture/boolean_input_v0/boolean_input_v0.partial.html',
    //         parent: angular.element(document.body),
    //         // targetEvent: event,
    //         clickOutsideToClose: true,
    //         // fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    //     })
    // };



}


