import {IRootScopeService} from '../../../index.run';

import {IPatient, IActivitySpec, ActivityInstanceStatus, ComponentTypes, IActivityInstance} from '../../ethercare.service';

/** @ngInject */
export class TextInputV0Controller {

    public instance: IActivityInstance;
    public patient: IPatient;

    constructor(
        public $window: angular.IWindowService,
        private $scope: angular.IScope,
        private $log: angular.ILogService,
        public $rootScope: IRootScopeService,
        private $mdSidenav: angular.material.ISidenavService,
        private $sce: angular.ISCEService

    ) {

    }

    public submit = () => {
        this.$log.debug('patient snapshot: ', this.patient)

        var indexOfInst = this.patient.activity_instances.indexOf(this.instance);

        //remove this instance
        this.patient.activity_instances.splice(indexOfInst, 1);
    }

}