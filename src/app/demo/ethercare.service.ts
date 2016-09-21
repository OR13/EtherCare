
import {IRootScopeService} from '../index.run';

export enum ActivityInstanceStatus {
    Incomplete,
    Complete
}

export interface IActivityInstance {
    status: ActivityInstanceStatus;
    activity_spec: IActivitySpec; // The spec for this activity
    instance: any; // All data related to information supplied by clients related to this activity. (partial, intents, etc...)
}

export interface IActivitySpec {
    cron_expression: string; // When should this activity be offered to clients.
    expiration_criteria: string; // All data related to how long this activity should be 
    render_config: any; // All data related to how this activity should be rendered, and reported on by clients.
    schema_config: any;
}

// Collection of Activity Specifications
export interface IActivitySuite {
    activity_specs: Array<IActivitySpec>;
}


declare var KeenAsync: any;

declare var later: any;

export class EtherCareService {

    public ActivitySuite: IActivitySuite;

    public patients: Array<any>;

    public keen_client: any;


    /** @ngInject */
    constructor(
        private $timeout: angular.ITimeoutService,
        private $log: angular.ILogService,
        private $http: angular.IHttpService,
        private $window: angular.IWindowService,
        private $q: angular.IQService,
        private $rootScope: IRootScopeService
    ) {

        KeenAsync.ready(() => {
            // Configure a client instance
            this.keen_client = new KeenAsync({
                projectId: '57da290c8db53dfda8a6fbdb',
                writeKey: '48EA3BFFB284C3A424D04F4EF80E857DE6A822816F56956A65A4F1369FCC3B63B41180CE94D3FEF38A0A801ADEBCB82935C864F6A62B3DDEE3226488E295003D02B97E2D04EE8AD181C18D67845BB4703764BF0AC62C361E6E3301AFBA9D6F95'
            });

        });

        var cron_expr = '0/120 * * * *';


        this.ActivitySuite = {
            activity_specs: [
                {
                    "cron_expression": cron_expr,
                    "expiration_criteria": "NEVER",
                    "render_config": {
                        "priority": 2,
                        "icon": "feedback",
                        "component": "text_input_v0"
                    },
                    "schema_config": {
                        "title": "What word best describes your day?",
                        "name": "word",
                        "type": "string"
                    }
                },
                {
                    "cron_expression": cron_expr,
                    "expiration_criteria": "NEVER",
                    "render_config": {
                        "priority": 1,
                        "icon": "healing",
                        "component": "boolean_input_v0"
                    },
                    "schema_config": {
                        "title": "Do you feel well today?",
                        "name": "is_feeling_well",
                        "type": "boolean"
                    }
                },
                {
                    "cron_expression": cron_expr,
                    "expiration_criteria": "NEVER",
                    "render_config": {
                        "priority": 3,
                        "icon": "ondemand_video",
                        "component": "content_view_v0"
                    },
                    "schema_config": {
                        "title": "Meditation Excercise",
                        "name": "has_read_content_view",
                        "type": "boolean"
                    }
                },
            ]
        };

        this.patients = [
            {
                name: 'Janet Perkins',
                img: '/assets/img/avatar.jpeg',
                newMessage: true,
                activity_suite: this.ActivitySuite,
                available_activities: []
            },
            // { name: 'Mary Johnson', img: '/assets/img/avatar.jpeg', newMessage: false },
            // { name: 'Peter Carlsson', img: '/assets/img/avatar.jpeg', newMessage: false }
        ]
    }

    public scheduleActivities = () => {

        // this.$log.debug('schedule activities for ', patient.name);

        this.patients.forEach((patient: any) => {
            this.$log.debug('schedule activities for ', patient.name);
            patient.activity_suite.activity_specs.forEach((activity_spec: IActivitySpec) => {
                this.$log.debug('cron this activity spec ', activity_spec);

                // var s = later.parse.cron(activity_spec.cron_expression);

                var s = later.parse.text('every 5 seconds');

                later.schedule(s).next(10);

                later.setInterval(() => {

                    if (patient.available_activities.indexOf(activity_spec) === -1) {
                        patient.available_activities.push(activity_spec);
                        this.$log.debug('new item added...');
                        this.$rootScope.$apply();
                    } else {
                        this.$log.debug('no action taken...');
                    }

                }, s);

            })

        })
    }

}