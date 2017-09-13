(function(angular, window, undefined) {
    angular
        .module('cbook', [
            'ngRoute',
            'cbook.api',
            'cbook.contacts',
            'cbook.contact'
        ])
        .config(function($routeProvider, $locationProvider) {
            $routeProvider.otherwise({redirectTo: '/'});
            $locationProvider.html5Mode(true);
        });
})(angular, window);
