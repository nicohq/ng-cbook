(function(angular, window, undefined) {
    angular
        .module('cbook.contacts', [])
        .component('contacts', {
            templateUrl: 'contacts.html',
            controller: ContactsCtrl
        })
        .config(function($routeProvider) {
            $routeProvider.when('/contacts', {
                // template: '<contacts></contacts>',
                template: 'div',
                resolve: {
                    list: function(APIService) {
                        return APIService.getContacts()
                    }
                }
            })
        });

    // ContactsCtrl.$inject = ['APIService'];

    function ContactsCtrl() {
        console.log(this);
    }

})(angular, window);
