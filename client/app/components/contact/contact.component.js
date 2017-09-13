(function(angular, window, undefined) {
    angular
        .module('cbook.contact', [])
        .component('contact', {
            templateUrl: 'app/components/contact/contact.html',
            bindings: {
                source: '<'
            },
            require: {
                parent: '^^contacts'
            },
            controller: ContactCtrl
        });

    ContactCtrl.$inject = ['APIService'];

    function ContactCtrl(APIService) {
        var $ctrl = this;

        $ctrl.editing = false;

        $ctrl.deleteContact = function(id) {
            APIService.deleteContact(id)
                .then(function(response) {
                    $ctrl.parent.removeContactFromList(response.data._id);
                })
                .catch(console.error.bind(console, 'Error due deleting contact: '));
        };

        $ctrl.submitEdit = function(form) {
            if(form.$valid) {
                APIService.updateContact($ctrl.formUser)
                    .then(function(response) {
                        $ctrl.parent.replaceContactInList(response.data);
                        $ctrl.discardEditing();
                    })
                    .catch(console.error.bind(console, 'Error due updating contact: '));
            }
        };

        $ctrl.editContact = function(contact) {
            $ctrl.editing = true;
            $ctrl.formUser = angular.copy(contact);
        };

        $ctrl.discardEditing = function() {
            $ctrl.editing = false;
        }
    }

})(angular, window);
