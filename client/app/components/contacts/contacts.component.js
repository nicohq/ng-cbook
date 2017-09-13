(function(angular, window, undefined) {
    angular
        .module('cbook.contacts', [])
        .component('contacts', {
            templateUrl: 'app/components/contacts/contacts.html',
            bindings: {
                list: '<'
            },
            controller: ContactsCtrl
        });

    function ContactsCtrl() {
        var $ctrl = this;

        $ctrl.replaceContactInList = function(contact) {
            $ctrl.list.data.forEach(function(origin, idx, array) {
                if(contact._id === origin._id) {
                    array[idx] = contact;
                }
            });
        };

        $ctrl.removeContactFromList = function(id) {
            $ctrl.list.data = $ctrl.list.data.filter(function(contact) {
                return contact._id !== id;
            });
        };

    }

})(angular, window);
