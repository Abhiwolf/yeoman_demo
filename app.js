angular.module('yeomanGenerator', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'login', 'home', 'LocalStorageModule']);

angular.module('yeomanGenerator').config(function ($stateProvider, $urlRouterProvider) {

        /* Add New States Above */
        $urlRouterProvider.otherwise('/loginPage');

    })
    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setStorageType('sessionStorage');
    });

angular.module('yeomanGenerator').run(function ($rootScope) {

    $rootScope.safeApply = function (fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof (fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
angular.module('yeomanGenerator').run(function ($rootScope, $location, serviceData, $state, $timeout) {
    $rootScope.$state = $state;
    $rootScope.authentication = {};
    var localSetData = serviceData.fillAuthData();
    $rootScope.authentication.isAuth = localSetData.isAuth;

    //$rootScope.authentication.isAuth = false;
    $rootScope.$on('passingAuthData', function (event, args) {
        $rootScope.authentication.isAuth = args.message;
        console.log($rootScope.authentication.isAuth);
    });
    console.log($rootScope.authentication.isAuth);
    $rootScope.excludedPages = [
        "loginPage"
    ];

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if ($rootScope.excludedPages.indexOf(toState.name) === -1) {
            //First check if the user is logged in. Then check for Module Permissions
            if ($rootScope.authentication.isAuth) {

            } else {
                event.preventDefault();
                $state.go('loginPage');
                return;
            }
        } else {
            if ($rootScope.authentication.isAuth) {
                event.preventDefault();
                $state.go('dashboard');
                return;
            }
        }
    });

});
angular.module('yeomanGenerator').controller('MainCtrl', function ($scope, serviceData, $state, localStorageService) {
    $scope.authInfo = serviceData.authentication;
    console.log($scope.authInfo);
    $scope.logoutOperation = function () {
        localStorageService.clearAll();
        $scope.authentication.isAuth = false;
        serviceData.logOut();
        $state.go('loginPage');
    };
});
