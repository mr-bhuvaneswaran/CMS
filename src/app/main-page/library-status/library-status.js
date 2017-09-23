"use strict";
function libraryStatusView(){
    return {
        restrict:'E',
        templateUrl:'app/main-page/library-status/library-status.html',
        scope : {
            books : '='
        },
        controller:function($scope){
             $scope.libraryDetails = [{
                 book_name:"Computer Networking",
                 book_id:"CS127",
                 issued_date:"07/08/2017",
                 renewal_date:"22/08/2017",
                 return_date:"06/09/2017",
                 fine_amt:40,
                 status:"ISSUED"
             },
             {
                 book_name:"Computer Networking",
                 book_id:"CS127",
                 issued_date:"07/08/2017",
                 renewal_date:"22/08/2017",
                 return_date:"06/09/2017",
                 fine_amt:40,
                 status:"ISSUED"
             },
             {
                 book_name:"Computer Networking",
                 book_id:"CS127",
                 issued_date:"07/08/2017",
                 renewal_date:"22/08/2017",
                 return_date:"06/09/2017",
                 fine_amt:40,
                 status:"ISSUED"
             },{
                 book_name:"Computer Networking",
                 book_id:"CS127",
                 issued_date:"07/08/2017",
                 renewal_date:"22/08/2017",
                 return_date:"06/09/2017",
                 fine_amt:40,
                 status:"ISSUED"
             },{
                 book_name:"Computer Networking",
                 book_id:"CS127",
                 issued_date:"07/08/2017",
                 renewal_date:"22/08/2017",
                 return_date:"06/09/2017",
                 fine_amt:40,
                 status:"ISSUED"
             },{
                 book_name:"Computer Networking",
                 book_id:"CS127",
                 issued_date:"07/08/2017",
                 renewal_date:"22/08/2017",
                 return_date:"06/09/2017",
                 fine_amt:40,
                 status:"ISSUED"
             },{
                 book_name:"Computer Networking",
                 book_id:"CS127",
                 issued_date:"07/08/2017",
                 renewal_date:"22/08/2017",
                 return_date:"06/09/2017",
                 fine_amt:40,
                 status:"ISSUED"
             },{
                 book_name:"Computer Networking",
                 book_id:"CS127",
                 issued_date:"07/08/2017",
                 renewal_date:"22/08/2017",
                 return_date:"06/09/2017",
                 fine_amt:40,
                 status:"ISSUED"
             },{
                 book_name:"Computer Networking",
                 book_id:"CS127",
                 issued_date:"07/08/2017",
                 renewal_date:"22/08/2017",
                 return_date:"06/09/2017",
                 fine_amt:40,
                 status:"ISSUED"
             },{
                 book_name:"Computer Networking",
                 book_id:"CS127",
                 issued_date:"07/08/2017",
                 renewal_date:"22/08/2017",
                 return_date:"06/09/2017",
                 fine_amt:40,
                 status:"ISSUED"
             },{
                 book_name:"Computer Networking",
                 book_id:"CS127",
                 issued_date:"07/08/2017",
                 renewal_date:"22/08/2017",
                 return_date:"06/09/2017",
                 fine_amt:40,
                 status:"ISSUED"
             },{
                 book_name:"Computer Networking",
                 book_id:"CS127",
                 issued_date:"07/08/2017",
                 renewal_date:"22/08/2017",
                 return_date:"06/09/2017",
                 fine_amt:40,
                 status:"ISSUED"
             },{
                 book_name:"Computer Networking",
                 book_id:"CS127",
                 issued_date:"07/08/2017",
                 renewal_date:"22/08/2017",
                 return_date:"06/09/2017",
                 fine_amt:40,
                 status:"ISSUED"
             }]   

        }
    };
}
module.exports= libraryStatusView;