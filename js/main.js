let products = [['Milk', 19], ['Bred', 50], ['Caviar', 5535], ['Butter', 35]];
let summ = 0;
let upSmile = ':-)';
let downSmile = ':-(';
let midleSmile = ':-/';
let smile;

for (let i=0; i < products.length; i++) {
    
    summ = summ + products[i][1];
    
}

console.log(summ, 'грн. - Вартість бутербродного набору');
console.log('Туди входить');

for (let i=0; i < products.length; i++) {
    if (products[i][1] > 100) {
        smile = downSmile;
    } else if(products[i][1] < 20){
        smile = upSmile;
    } else {
        smile = midleSmile;
    }


    console.log(products[i], smile);
    
    
}
