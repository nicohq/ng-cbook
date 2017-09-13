(function(angular, window, undefined) {
    angular
        .module('cbook.api', [])
        .factory('APIService', function($http) {
            var API_ROOT = '/api';

            function getContacts(params) {
                return $http.get(API_ROOT + '/contacts', {params: params});
            }

            function getContact(id) {
                return $http.get(API_ROOT + '/contacts/' + id);
            }

            function createContact(contact) {
                return $http.post(API_ROOT + '/contacts', contact);
            }

            function updateContact(contact) {
                return $http.put(API_ROOT + '/contacts/' + contact._id, contact);
            }

            function deleteContact(id) {
                return $http.delete(API_ROOT + '/contacts/' + id);
            }

            return {
                getContacts: getContacts,
                getContact: getContact,
                createContact: createContact,
                updateContact: updateContact,
                deleteContact: deleteContact
            }
        });

})(angular, window);
