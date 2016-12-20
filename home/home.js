angular.module('home', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'chart.js']);

angular.module('home').config(function ($stateProvider) {

    $stateProvider.state('dashboard', {
        url: '/dashboard',
        templateUrl: 'home/partial/dashboard/dashboard.html'
    });
    $stateProvider.state('payment', {
        url: '/payment',
        templateUrl: 'home/partial/payment/payment.html'
    });
    $stateProvider.state('notification', {
        url: '/notification',
        templateUrl: 'home/partial/notification/notification.html'
    });
    /* Add New States Above */

});
