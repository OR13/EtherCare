import {ContentViewV0Controller} from './content_view_v0.controller';

/** @ngInject */
export function appNavbar(): angular.IDirective {

  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/demo/capture/content_view_v0/content_view_v0.partial.html',
    controller: ContentViewV0Controller,
    controllerAs: 'vm',
    bindToController: true
  };

}
