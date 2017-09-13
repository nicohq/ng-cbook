(function(angular, window, undefined) {
    angular
        .module('cbook', [
            'ui.router',
            'cbook.api',
            'cbook.contacts',
            'cbook.contact'
        ])
        .config(function($stateProvider, $urlServiceProvider, $locationProvider) {
            $urlServiceProvider.rules.otherwise({state: 'contactsList'});
            $locationProvider.html5Mode(true);

            $stateProvider
                .state('contactsList', {
                    url: '/contacts',
                    component: 'contacts',
                    resolve: {
                        list: function(APIService) {
                            return APIService.getContacts({limit:10, skip:0})
                        }
                    }
                })
                .state('contactsList.create', {
                    url: '/create',
                    component: 'contact-create'
                })
                .state('contactsList.edit', {
                    url: '/edit',
                    component: 'contact-edit'
                });
        });
})(angular, window);
