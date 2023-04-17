import React from "react";


type props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNo: number;
    totalQuestions: number;
}



const QuestionCard: React.FC<props> = ({question,answers,callback,userAnswer,questionNo,totalQuestions}) => (
    
      <div>
        <p>
            Questopn: {questionNo} out of {totalQuestions}
        </p>

        <p dangerouslySetInnerHTML={{ __html: question}}></p>
        <div>
            {answers.map(answer => (
              <div>
                <button disabled={userAnswer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answer}} />  
                </button>
              </div>  
            ))}
        </div>


      </div>

   

);

 
export default QuestionCard;
