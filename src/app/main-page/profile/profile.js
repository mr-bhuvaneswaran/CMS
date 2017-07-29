function profileView(){
    return {
        restrict : 'E',
        scope : {

        },
        templateUrl : 'app/main-page/profile/profile.html',
        controller:function($scope){
            $scope.student = {
                name:"BHUVANESWARAN B",
                batch:"2015-2019",
                department:"CSE",
                roll_no:"15BCS2015",
                date_of_birth:"08/05/1998",
                gender:"Male",
                father_name:"BASKARAN C",
                mother_name:"CHANDRA",
                income:40000.00,
                religion:"Hindu",
                community:"Backward Community",
                caste:"YADAVA",
                nationality:"INDIAN",
                mother_tongue:"TAMIL",
                place_of_birth:"MADURAI",
                financial_category:"self",
                admission_type:"Regular",
                admission_category:"Government Quota",
                primary_address:"B,93 Housing Board,West ayakudi,Palani-624613",
                secondary_address:"B,93 Housing Board,West ayakudi,Palani-624613",
                height:170,
                weight:58.00,
                blood_group:"O+",
                physically_challenged:"YES",
                eye_colour:"Brown",
                eye_sight:"Normal",
                mole:"On left hand wrist",
                scar:"On left leg ankle",
                educational_informations:[{
                    course:"10th",
                    institute:"Swamy Matriculation Higher Secondary School",
                    place:"Palani",
                    percentage:94.00,
                    year_of_passedout:2013,
                },{
                    course:"12th",
                    institute:"Swamy Matriculation Higher Secondary School",
                    place:"Palani",
                    percentage:93.00,
                    year_of_passedout:2015,
                }
                ]
            }

        }
    }
}

module.exports = profileView;