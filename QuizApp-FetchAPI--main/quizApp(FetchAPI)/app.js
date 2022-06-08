import changeQuestions from "./changeQuestions.js";
const spinner = document.querySelector(".spinner");
const questionWRAP = document.querySelector(".questions-container");
const answerWRAP = document.querySelector(".answers-container");
const answerBTNS = document.querySelectorAll(".answer-btns");
const sendAnswerBTN = document.querySelector(".send-answer-btn");
const startBTN  = document.querySelector(".start-btn");
const startText = document.querySelector(".startText");
const questionsOrder = document.querySelector(".rules-info");
const id = 50;

//if you want change questions lenght just change id :)
const url = `https://opentdb.com/api.php?amount=${id}&type=multiple`;

let isDone = false;
let questions_turn = 0;
let options = [];
let score = 0;
let data;

 //50 piece ques data
(async()=>{
    data = await (await fetch(url)).json();
   
    //checking data if loaded remove spinner
        let checkLoad = setInterval(()=>{
            if(data != undefined){
                startText.style.display = "block";
                spinner.remove();
                
                clearInterval(checkLoad);
            }
        },100)
})()


startBTN.addEventListener("click",()=>{
   
    //this if checking quiz done or not if done refresh page
    if(isDone==true){
    document.body.style.display = "none";
    location.reload();
    }
    //check data loaded or not
    if(data != undefined){
     
    //remove start button and bring quiz-wrap
    document.querySelector(".quiz-wrapper").style.display = "block";
    startBTN.style.display = "none";

    (async ()=>{
       
        //sets first questions
        changeQuestions(data,questionWRAP,answerBTNS,questions_turn,options,questionsOrder)
        
        //add selected class wiht click event -(cevaplara tıkladıkça selected classı ekler-siler)
        answerBTNS.forEach((item,index,array)=>{
        
           item.addEventListener("click",()=>{
                //check other btns if there is selected class remove them
                array.forEach((item)=>{
    
                    if(item.classList.contains("selected")){
                       item.classList.remove("selected")
                    }
                    
                })
    
                //add selected 
                item.classList.toggle("selected")
                
              
            })
          
        })
    
        sendAnswerBTN.addEventListener("click",()=>{
           
            let selectedBTN = document.querySelector(".selected");
            //if user didn't chose any answer dont work
            if(selectedBTN != null){

                 //answer checker true or false 
            if(data.results[questions_turn].correct_answer == selectedBTN.innerHTML){
                score += 10;
                console.log(true);
            }
            //check fnish or not if fnished delete quizwrap and show score
            if(questions_turn != id-1){
                
                questions_turn++;
                selectedBTN.classList.remove("selected");
                changeQuestions(data,questionWRAP,answerBTNS,questions_turn,options,questionsOrder)
            }else{
                document.querySelector(".quiz-wrapper").style.display = "none";
                startBTN.style.display = "flex";
                startBTN.innerHTML = `SCORE: ${score} 
                <button class="resBTN">Restart</button>`
                isDone = true;
            }
            }
      
        })
    })()
    }
    
})
