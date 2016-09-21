
import {IRootScopeService } from '../index.run';

export class DemoController {

    public patients: Array<any>;

    /* @ngInject */
    constructor(
        public $scope: angular.IScope,
        public $mdSidenav: angular.material.ISidenavService,
        public $http: angular.IHttpService,
        public $log: angular.ILogService,
        public $rootScope: IRootScopeService,
        public $timeout: angular.ITimeoutService,
        public $interval: angular.IIntervalService,
        public $mdDialog: any,
        public toastr: any
    ) {
        this.loadDemoData();
    }

    public completeNextActivity = (patient, event) => {

        var confirm = this.$mdDialog.confirm()
            .title('Would you like to delete your debt?')
            .content('All of the banks have agreed to forgive you your debts.')
            .ariaLabel('Lucky day')
            .targetEvent(event)
            .ok('Please do it!')
            .cancel('Sounds like a scam')

        this.$mdDialog.show(confirm).then(function () {
            // $scope.status = 'You decided to get rid of your debt.';
        }, function () {
            // this.$scope.status = 'You decided to keep your debt.';
        });

        // this.keen_client.recordEvent('feelings', {
        //         //     //     feelings: feelings
        //         //     // });

    }

    public doPrimaryAction = function (event) {
        // this.$mdDialog.show(
        //   this.$mdDialog.alert()
        //     .title('Primary Action')
        //     .textContent('Primary actions can be used for one click actions')
        //     .ariaLabel('Primary click demo')
        //     .ok('Awesome!')
        //     .targetEvent(event)
        // );
    };

    public doSecondaryAction = function (event) {
        // this.$mdDialog.show(
        //   this.$mdDialog.alert()
        //     .title('Secondary Action')
        //     .textContent('Secondary actions can be used for one click actions')
        //     .ariaLabel('Secondary click demo')
        //     .ok('Neat!')
        //     .targetEvent(event)
        // );
    };

    public loadDemoData = () => {

        this.patients = this.$rootScope.App.EtherCareService.patients;

        this.$rootScope.App.EtherCareService.scheduleActivities();

    }



}
