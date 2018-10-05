function isWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay();

    switch(day){
        case 0:
        case 6:
            return true;
        default:
            return false;
    }
}

console.log('isWeekend',isWeekend());