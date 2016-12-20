angular.module('login').controller('LoginpageCtrl', function ($scope, serviceData, $state, localStorageService, $timeout) {
    $scope.authData = {};
    $scope.dologin = function (formData) {
        $scope.authData.errorMessage = '';
        serviceData.getLogin(formData).success(function (resp) {
            var searchValue = _.find(resp, function (value) {
                if (value.firstName === formData.userName) {
                    return true;
                }
            });
            if (searchValue) {
                var localStorageData = serviceData.fillAuthData();
                console.log(localStorageData);
                $scope.$emit('passingAuthData', {
                    message: localStorageData
                });
                $state.go('dashboard');
            } else {
                $scope.authData.errorMessage = "Unknown error while trying to authenticate. Please try again.";
            }

        }).error(function (err) {
            $scope.authData.errorMessage = "Unknown error while trying to authenticate. Please try again.";
        });
    };
});
