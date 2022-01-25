angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quiz-api-smo.us-west-2.elasticbeanstalk.com/quiz/';

    return service;
}]);