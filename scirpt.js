let input1 = document.querySelector(".majin buu");
let input2 = document.querySelector(".goku");
let input3 = document.querySelector(".vegeta");
let input4 = document.querySelector(".piccolo");
let button = document.querySelector("button");
let results = document.querySelector(".results");
let image = document.querySelector("img");







button.onclick = function(){
    // console.log("button check");
 
};


    let answer1 = input1.value;
    console.log (answer1);
let answer2 = input2.value;
console.log (answer2);
let answer3 = input3.value;
    console.log (answer3);
let answer4 = input4.value;
console.log (answer4);
    
 
        if (answer1 <= "13" && answer2 === "Eating"){
           console.log("Majin Buu");
        results.innerHTML = "You like Majin Buu";
        } 
        
//     } else if (answer1 === "15" && answer2 === "Fighting"){
//         console.log("Goku");
//         image.src= "https://i.ebayimg.com/images/g/mGMAAOSwdUdjM4BG/s-l1200.webp";
//     } else if (answer1 === "16" && answer2 === "Emotion"){
//         console.log("Vegeta");
//         image.src= "https://i.pinimg.com/736x/16/27/ce/1627ce3e5f7cda6c141e53dfd673b56a.jpg";
//     } else if (answer1 === "18" && answer2 === "training"){
//         console.log("piccolo");
//         image.src= "https://paintbynumbersforsale.com/wp-content/uploads/2021/02/Piccolo-Dragon-Ball-paint-by-numbers.jpg";
        
//     }