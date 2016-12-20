angular.module('yeomanGenerator').factory('serviceData', function ($http, localStorageService) {

    var serviceData = {};
    var authentication = {
        isAuth: false,
        userName: "",
        id: 0
    };
    var getLogin = function (data) {
        return $http.get('/jsonFile/login_credential.json').success(function (response) {
            storeAuthData(response, data);
            return response;
        }).error(function (error) {
            return error;
        });
    };

    var logOut = function () {
        localStorageService.clearAll();
        authentication.isAuth = false;
        authentication.userName = "";
        authentication.id = 0;
        return authentication;
    };

    function storeAuthData(response, data) {
        var searchValue = _.find(response, function (value) {
            if (value.firstName === data.userName) {
                return true;
            }
        });
        if (searchValue) {
            localStorageService.set('authData', {
                id: searchValue.Id,
                userName: searchValue.firstName,
                emailId: searchValue.emailId,
                mobile: searchValue.mobile,
                isAuth: true
            });
        }
    }
    var fillAuthData = function () {
        var authData = localStorageService.get('authData');
        console.log(authData);
        if (authData) {
            authentication.isAuth = true;
            authentication.userName = authData.userName;
            authentication.id = authData.id;
        } else {
            authentication.isAuth = false;
            authentication.userName = "";
            authentication.id = 0;
        }
        return authentication;
    };

    var getNotifications = function () {
        return $http.get('/jsonFile/notifications.json').success(function (response) {
            return response;
        }).error(function (error) {
            return error;
        });
    };

    //get graph data
    var getDashboardgraphData = function () {
        return $http.get('/jsonFile/graphData.json').success(function (response) {
            return response;
        }).error(function (error) {
            return error;
        });
    };

    serviceData.getLogin = getLogin;
    serviceData.fillAuthData = fillAuthData;
    serviceData.authentication = authentication;
    serviceData.logOut = logOut;
    serviceData.getDashboardgraphData = getDashboardgraphData;

    serviceData.getNotifications = getNotifications;

    return serviceData;
});
