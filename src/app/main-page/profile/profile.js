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
                rollNo:"15BCS2015",
                dateOfBirth:"08/05/1998",
                gender:"Male",
                fatherName:"BASKARAN C",
                motherName:"CHANDRA",
                income:40000.00,
                religion:"Hindu",
                community:"Backward Community",
                caste:"YADAVA",
                nationality:"INDIAN",
                motherTongue:"TAMIL",
                placeOfBirth:"MADURAI",
                financialCategory:"self",
                admissionType:"Regular",
                admissionCategory:"Government Quota",
                primaryAddress:{
                    addressLine1:"B,93 Housing Board",
                    addressLine2:"West ayakudi",
                    addressLine3:"Palani-624613"
                },
                secondaryAddress:{
                    addressLine1:"B,93 Housing Board",
                    addressLine2:"West ayakudi",
                    addressLine3:"Palani-624613"
                },
                medicalInformation:{
                    height:170,
                    weight:58.00,
                    bloodGroup:"O+",
                    physicallyChallenged:"YES",
                    eyeColour:"Brown",
                    eyeSight:"Normal",
                    identification:{
                        mole:"On left hand wrist",
                        scar:"On left leg ankle"
                    }
                },
                educationalInformations:[{
                    course:"10th",
                    institute:"Swamy Matriculation Higher Secondary School",
                    place:"Palani",
                    percentage:94.00,
                    yearOfPassedOut:2013,
                },{
                    course:"12th",
                    institute:"Swamy Matriculation Higher Secondary School",
                    place:"Palani",
                    percentage:93.00,
                    yearOfPassedOut:2015,
                },],



            }

        }
    }
}

module.exports = profileView;