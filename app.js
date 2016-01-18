var core = require('angular2/core');
var bootstrap = require('angular2/platform/browser').bootstrap;
var UpgradeAdapter = require('angular2/upgrade').UpgradeAdapter;
var ng = {
	core: core
}

var AppComponent = 
	ng.core.Component({
		selector: 'app'
	})
	.View({
		template: '<h1>working</h1>'
	})
	.Class({
		constructor: function(pinsService){
			pinsService.working();
		}
	});

AppComponent.parameters = [new ng.core.Inject('PinsService')];

angular.module('interestApp', [])
.service('PinsService', function($http, $q) {
	this.working = function(){
		alert('servicce working');
	}
});

var upgradeAdapter = new UpgradeAdapter();
angular.module('interestApp')
  .directive('app', upgradeAdapter.downgradeNg2Component(AppComponent))
upgradeAdapter.upgradeNg1Provider('PinsService');

upgradeAdapter.bootstrap(document.body, ['interestApp']);
