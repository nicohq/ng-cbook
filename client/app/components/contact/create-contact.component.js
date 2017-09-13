(function(angular, window, undefined) {
    angular
        .module('cbook.contact-create', [])
        .component('contact', {
            templateUrl: 'app/components/contact/create-contact.html',
            controller: CreateContactCtrl
        });

    CreateContactCtrl.$inject = ['APIService'];

    function CreateContactCtrl(APIService) {
        var $ctrl = this;


    }

})(angular, window);
