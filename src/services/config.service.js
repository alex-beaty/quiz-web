angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'http://quiz-api-smo.us-west-2.elasticbeanstalk.com/';

    return service;
}]);