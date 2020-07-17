//Feet To Mile Converter
// Formula : divide feet value by 5280;


function feetToMile (feet){
    if ( feet == 0 ){
        return "0 feet is equal to 0 mile";
    }
    else{
        var mile = feet / 5280;
        return mile;
    }
};


 // Wood Calculator
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
}


 

//Brick Calculation

function brickCalculator(floor){
    if(floor <= 0){
        return "number of floor can't be negative or zero"
    }
    else if (floor <= 10){
        var brick = floor * 15 * 1000;
        return brick;
    }
    else if (floor <= 20){
        var brick = floor * 12 * 1000;
        return brick;
    }
    else{
        var brick = floor * 10 * 1000;
        return brick;
    }
}



// Finding Tiny Friend


function tinyFriend(friendsName){
    var tinyFriendNameLength = friendsName[0].length;

    for(var i = 0; i < friendsName.length; i++){

        var currentNameLength = friendsName[i].length;

            if(currentNameLength < tinyFriendNameLength){
                tinyFriendNameLength = currentNameLength
            }
    }
    return tinyFriendNameLength;
}
