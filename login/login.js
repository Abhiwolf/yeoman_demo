angular.module('login', ['ui.bootstrap', 'ui.router', 'ngAnimate']);

angular.module('login').config(function ($stateProvider) {

    $stateProvider.state('loginPage', {
        url: '/loginPage',
        templateUrl: 'login/partial/loginPage/loginPage.html'
    });
    /* Add New States Above */

});
