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

    ContactsCtrl.$inject = ['APIService'];

    function ContactsCtrl(APIService) {
        var $ctrl = this,
            contactLimit = 10,
            skip = 10;

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

        $ctrl.listPrev = function() {
            var params = {};

            if(skip >= 0) {
                angular.extend(params, {
                    skip: skip,
                    limit: contactLimit
                });

                APIService.getContacts(params)
                    .then(function(response) {
                        var length = response.data.length;
                        skip = skip - length;
                        $ctrl.list = response;
                    })
                    .catch(console.error.bind(console, 'Error while requesting contacts :'));
            }
        };

        $ctrl.listNext = function() {
            var params = {};
            if(skip % contactLimit === 0) {
                angular.extend(params, {
                    limit: contactLimit,
                    skip: skip
                });

                APIService.getContacts(params)
                    .then(function(response) {
                        var length = response.data.length;
                        skip = skip + length;
                        $ctrl.list = response;
                    })
                    .catch(console.error.bind(console, 'Error while requesting contacts :'));
            }
        };

    }

})(angular, window);
