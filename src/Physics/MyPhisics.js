function Colision(x1, y1, x2, y2){
    var subr1 = Math.pow((x2 - x1), 2);
    var subr2 = Math.pow((y2 - y1), 2);
    return Math.sqrt((subr1 + subr2));
}

function isCollided(x1, y1, x2, y2, size){
    if(Colision(x1,y1,x2,y2) <= size){
        return true;
    }else{
        return false;
    }
}

function isPermitted(dir_1, dir_2){
    if(!dir_1 && dir_2){ // -> & <-
        return 1;
    }else if(!dir_1 && !dir_2){ // -> & ->
        return 2;
    }else if(dir_1 & dir_2){ //<- & <-
        return 3;
    }else if(dir_1 && !dir_2){ //<- & ->
        return 4;
    }
}

export {isCollided, isPermitted};