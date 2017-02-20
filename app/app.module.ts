import IAngularStatic = angular.IAngularStatic;
import {appComponent} from "./app.component";

declare var angular: IAngularStatic;

export const appModule = angular
    .module('app.module', [])
    .component('salesforceApp', appComponent);