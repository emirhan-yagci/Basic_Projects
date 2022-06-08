    export default function changeQuestions(data,questionWRAP,answerBTNS,questions_turn,options,questionsOrder){
  
    //questions set
    questionWRAP.innerHTML = data.results[questions_turn].question;
    //set order of questions
    questionsOrder.style.backgroundColor = "rgb(44, 40, 40)";
    questionsOrder.innerHTML=`#${questions_turn+1}`;
    //add to array all answers
    options = data.results[questions_turn].incorrect_answers.concat(data.results[questions_turn].correct_answer);
    /*---------------- */
    //mix the opitons array
    options.sort((a,b)=>{
        return 0.5 - Math.random() 
    })
   
    answerBTNS.forEach((item,index)=>{
       
        item.innerHTML = options[index];
    })
     /*---------------- */
}