function markDetailView(){
    return {
        restrict:'E',
        templateUrl:'app/main-page/mark-details/mark-details.html',
        controller:function($scope){
            $scope.markDetails = [{
                semNO:1,

            },{
                semNO:2,
                
            },{
                semNO:3,
                
            },{
                semNO:4,
                
            },{
                semNO:5,
                
            },{
                semNO:6,
                
            }]

        }
    };
}
module.exports= markDetailView;