// 1. Feet To Mile Converter

function feetToMile (feet){
    if ( feet < 0 ){
        return "Distance can't be negative value";
    }
    else if(feet == 0){
        return 0;
    }
    else{
        const mile = feet / 5280;
        return mile;
    }
};





 //2.  Wood Calculation

function woodCalculator(chair, table, bed){
    if(chair < 0 || table <0 || bed < 0){
        return "Number of wood can't be negative value"
    }
    else{
        var woodForChair = chair * 1;
        var woodForTable = table * 3;
        var woodForBed = bed * 5;
        var totalWood = woodForChair + woodForTable + woodForBed;
        return totalWood;
    }
};


 

//3. Bricks Calculation

function brickCalculator(floor){
    if(floor <= 0){
        return "Sorry! Number of floor can't be negative or zero";
    }
    else if(floor <= 10){
        var bricksForTenFloor = floor * ( 15 * 1000);
        return bricksForTenFloor;
    }
    else if(floor > 10 && floor <=20 ){
        var firstTenFloor = 10;
        var afterTenFloor = floor - firstTenFloor;
        var bricksForTwentyFloor = (firstTenFloor * (15 * 1000) + afterTenFloor * (12 * 1000));
        return bricksForTwentyFloor;
    }
    else {
        AfterTwentyFloor = floor - 20;
        twentyFloorBricks = (10 * (15 * 1000) + 10 * (12 * 1000));
        totalBricks = (AfterTwentyFloor * (10 * 1000) + twentyFloorBricks);
        return totalBricks;
    }
};

//4. Finding Tiny Friend


function tinyFriend(friends){
    var tinyFriendName = friends[0];
    if(friends.length == 0){
        return "Please, Add your friend Name";
    }
    else{
        for(var i = 0; i < friends.length; i++){
            var element = friends[i];
            if(element.length <= tinyFriendName.length){
                tinyFriendName = element;   
            }
        }
    }
    return tinyFriendName;
};

