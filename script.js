


let button = document.querySelector("button");
let results = document.querySelector(".results");
let image = document.querySelector("img");
let q1 = document.querySelector(".q1");
let q2 = document.querySelector(".q2");
let resultstext = document.querySelector(".resultstext");

button.onclick = function(){
    let answer1 = q1.value;
    console.log(answer1);
    let answer2 = q2.value;
    console.log(answer2);

    if (answer2 >= 10 <=100 && answer1 === "Eating"){
        console.log("Majin Buu");
        results.src= "https://figurestart.com/cdn/shop/products/Dragon-Ball-Z-Fat-Majin-Buu-S.H.Figuarts-for-Sale.jpg?v=1679384166&width=1445";
        resultstext.innerHTML= "You are MAJIN BUU!"
    }else if (answer2 >10  <=100 && answer1 === "Fighting"){
        console.log("Goku");
        results.src= "https://i.ebayimg.com/images/g/mGMAAOSwdUdjM4BG/s-l1200.webp";
        resultstext.innerHTML= "You are SON GOKU!"
    } else if (answer2 >10 <=100 && answer1 === "Pride"){
        console.log("Vegeta");
        results.src= "https://i.pinimg.com/736x/16/27/ce/1627ce3e5f7cda6c141e53dfd673b56a.jpg";
        resultstext.innerHTML= "You are PRINCE VEGATA!"
    } else if (answer2 >10 <=100 && answer1 === "Training"){
        console.log("piccolo");
        results.src= "https://paintbynumbersforsale.com/wp-content/uploads/2021/02/Piccolo-Dragon-Ball-paint-by-numbers.jpg";
        resultstext.innerHTML= "You are the NAMEKAIN WARRIOR PICCOLO!"
    }

};
   

    
 

        
