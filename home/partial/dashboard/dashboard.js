angular.module('home')
    .config(['ChartJsProvider', function (ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            chartColors: ['#FF5252', '#e8b20b']
        });
  }])
    .controller('DashboardCtrl', function ($scope, serviceData) {
        //get notifications data from service
        $scope.data = ['100'];
        serviceData.getNotifications().success(function (response) {
            $scope.notificationData = response;
        }).error(function (error) {

        });

        //Get graph data fro service
        serviceData.getDashboardgraphData().success(function (response) {
            $scope.graphData = response;
            var totalPercentage = 0;
            _.each($scope.graphData, function (value) {
                totalPercentage = totalPercentage + parseFloat(value.gainPercentage);
            });
            $scope.data.unshift(totalPercentage.toString());
        }).error(function (error) {

        });

        //charts.js
        $scope.labels = ["Overall", "Total"];
    }).controller('DashboardCtrlChartPhysics', function ($scope, serviceData) {
        $scope.labels = ["Physics", "Total"];
        $scope.data = ['100'];

        serviceData.getDashboardgraphData().success(function (response) {
            $scope.graphDataPhysics = response;
            var getPhysicsPercent = _.find($scope.graphDataPhysics, {
                'subjectName': 'Physics'
            });
            $scope.data.unshift(getPhysicsPercent.gainPercentage.toString());
        }).error(function (error) {

        });


    }).controller('DashboardCtrlChartChemistry', function ($scope, serviceData) {
        $scope.labels = ["Chemistry", "Total"];
        $scope.data = ['100'];

        serviceData.getDashboardgraphData().success(function (response) {
            $scope.graphDataChemistry = response;
            var getChemistryPercent = _.find($scope.graphDataChemistry, {
                'subjectName': 'Chemistry'
            });
            $scope.data.unshift(getChemistryPercent.gainPercentage.toString());
        }).error(function (error) {

        });

    }).controller('DashboardCtrlChartMaths', function ($scope, serviceData) {
        $scope.labels = ["Maths", "Total"];
        $scope.data = ['100'];

        serviceData.getDashboardgraphData().success(function (response) {
            $scope.graphDataMaths = response;
            var getMathsPercent = _.find($scope.graphDataMaths, {
                'subjectName': 'Maths'
            });
            $scope.data.unshift(getMathsPercent.gainPercentage.toString());
        }).error(function (error) {

        });

    }).controller('DashboardCtrlChartComputer', function ($scope, serviceData) {
        $scope.labels = ["Computer Science", "Total"];
        $scope.data = ['100'];

        serviceData.getDashboardgraphData().success(function (response) {
            $scope.graphDataComputer = response;
            var getComputerPercent = _.find($scope.graphDataComputer, {
                'subjectName': 'Computer Science'
            });
            $scope.data.unshift(getComputerPercent.gainPercentage.toString());
        }).error(function (error) {

        });

    }).controller("LineChartCtrl", function ($scope) {

        $scope.labels = ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.datasetOverride = [{
            yAxisID: 'y-axis-1'
        }];
        $scope.options = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    }
                ]
            }
        };
    }).controller("twoLineChartCtrl", function ($scope) {

        $scope.labels = ["2010-11", "2011-12", "2012-13", "2103-14", "2014-15", "2015-16", "2016-17"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
  ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.datasetOverride = [{
            yAxisID: 'y-axis-1'
        }, {
            yAxisID: 'y-axis-2'
        }];
        $scope.options = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
        },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
        }
      ]
            }
        };
    });
