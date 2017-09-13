(function(angular, window, undefined) {
    angular
        .module('cbook.contact', [])
        .component('contact', {
            templateUrl: 'contact.html',
            bindings: {
                value: '<'
            },
            controller: ContactCtrl
        });

    ContactCtrl.$inject = [];

    function ContactCtrl() {}
})(angular, window);
