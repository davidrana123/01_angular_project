const URL="http://covid19.mathdro.id/api";

let app = angular.module("MyApp",[]);

app.controller("MyCtrl",($scope,$http) => {
    //this is controller
    $scope.title = "Stay home stay safe";

    console.log("APP Loaded");
    
    //Calling api
    $http.get(URL).then( 
        (response)=>{
        //success define
        console.log(response.data);
        $scope.all_data = response.data;
    },
    (error) =>{
        //error define
        console.log(error)
    } 
    );

    //get countery data

    $scope.get_c_data=() => {
       let country=$scope.c;
       if(country=="") {
           $scope.c_data = undefined;
           return;
       }

       $http.get(`${URL}/countries/${country}`)
       .then((response)=> {
            console.log(response.data);
            $scope.c_data = response.data;
       } , 
       (error)=>{
            console.log(error);
       }
       );
    };

});