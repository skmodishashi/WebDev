
let a = Math.random();
let b = Math.random();
let c = Math.random();

let Adjective,ShopName,LastWord;

// Adjective
if(a<0.33){
    Adjective = "Crazy";
}
else if(0.33<=a<0.66){
    Adjective = "Amazing";
}
else{
   Adjective = "Fire"; 
}

//Shop Name
if(b<0.33){
    ShopName = "Engine";
}
else if(0.33<=b<0.66){
    ShopName = "Foods";
}
else{
   ShopName = "Garments"; 
}

// Last Word
if(c<0.33){
    LastWord = "Bros";
}
else if(0.33<=c<0.66){
    LastWord = "Limited";
}
else{
   LastWord = "Hub"; 
}


console.log(Adjective+ " "+ShopName+" "+LastWord);
