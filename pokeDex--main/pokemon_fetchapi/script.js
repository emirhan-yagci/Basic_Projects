import {colors} from "/colors.js";
import showNhideFN from "/showNhide.js"
const poke_card_wrapper = document.querySelector(".poke-cards-wrapper");
const get_poke_name = document.querySelector("#poke-name");


//this api have onlu 898 pokemon ,so you can give only 898 as max value
let id = 15;

(async ()=>{
for(let i = 1;i<=id;i++){
    let root = document.querySelector(":root");
    let pokeDatas = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)).json()
        console.log(pokeDatas);
    let pokeIMG  = pokeDatas.sprites.front_shiny;
    let pokeID   = pokeDatas.id;
    let pokeNAME = pokeDatas.name;
    let pokeTYPE = pokeDatas.types[0].type.name;

    let pokeCard_HTML = 
    `  
    <div class="poke-card-item">
        <div class="poke-type">${pokeTYPE}</div>
        <img src="${pokeIMG}" alt="" width="150px">
        <div class="poke-id">${pokeID}</div>
      
        <div class="poke-name">${pokeNAME}</div>
    </div>
    `
    
    poke_card_wrapper.innerHTML+=pokeCard_HTML;
   
    let poke_card_item = document.querySelectorAll(".poke-card-item")[i-1];
    let poke_type = document.querySelectorAll(".poke-type")[i-1];
    poke_type.style.backgroundColor = `${colors[pokeTYPE]}`;
    poke_card_item.style.backgroundColor =`${colors[pokeTYPE]}`;
    
    if(i==id){
        showNhideFN(get_poke_name);
    }
       

}
})()


