let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    if (guests>0 && guests<=50){
        let cost=(guests)*(parseInt(4,000));
           return cost; 
        }else if(guests>50 && guests<=100){
            let precio=(parseInt(10.000));
            let cost=guests*precio;
            return cost;
        }else if(guests>100 && guests<=200){
            let cost=(guests)*(parseInt(15.000));
            return cost;
        }else{
            let cost=(guests*20,000);
            return cost;
        }
    
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
