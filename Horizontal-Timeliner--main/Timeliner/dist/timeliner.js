const steps = document.querySelectorAll(".steps");
const line = document.querySelector(".modifiable-line");
const showSteps = document.querySelectorAll(".showsteps-wrap > div");

steps.forEach((item)=>{
        item.addEventListener("click",()=>{
            // firstly delete all active class
            steps.forEach((items)=>{
                items.classList.remove("active");
            })
            //set active class the selected step
            item.classList.add("active");
            let lineWidth = item.offsetLeft;
            line.style.width = `${lineWidth+14}px`;

            //get order the which step selected
            let activeOrder = item.dataset.step;

            showSteps.forEach((showItem)=>{
                //check activeOrder if same set display = block if not display none
                if(showItem.dataset.show == activeOrder){
                    showItem.style.display ="block";
                }else{
                    showItem.style.display="none";
                }
            })
             
        })
})