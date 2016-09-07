
import {IRootScopeService} from '../index.run';


export interface ICarePlanAction {
    cron_expression: string;
    result: any;
}

export interface ICarePlan {
    actions: Array<ICarePlanAction>;
}

export class EtherCareService {

    public CarePlan: any;

    /** @ngInject */
    constructor(
        private $timeout: angular.ITimeoutService,
        private $log: angular.ILogService,
        private $http: angular.IHttpService,
        private $window: angular.IWindowService,
        private $q: angular.IQService,
        private $rootScope: IRootScopeService
    ) {

        this.CarePlan = {};


    }



}