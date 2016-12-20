angular.module('home').controller('PaymentCtrl', function ($scope, $window, $uibModal) {

    $scope.isSelectBtnClick = false;
    $scope.clickSelectBtn = function (id) {
        $scope.activeBtn = id;
        $scope.isSelectBtnClick = true;
        // $scope.selectedSubject = id;
    };

    $scope.goToPaymentMethod = function () {
        $scope.animationsEnabled = true;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl'
        });
    };
}).controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

    $scope.message = "Payment Gateway comming soon...";

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
