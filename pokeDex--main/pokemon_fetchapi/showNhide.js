export default function showNhide(get_poke_name){
    get_poke_name.disabled = false;
    get_poke_name.addEventListener("input",()=>{
        let input_value = get_poke_name.value;
        let poke_card_item = document.querySelectorAll(".poke-card-item");
    
        poke_card_item.forEach((elems)=>{
            let poke_cards_names = elems.children[3].textContent
            if(!poke_cards_names.includes(input_value)){
                elems.style.display = "none";
            }else{
                elems.style.display = "flex";
            }
           
        })
    
    })
}