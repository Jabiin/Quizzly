import QuestionCard from "./components/QuestionCard"
import * as React from 'react';
import { useState } from 'react';



const App = () => {

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true)



    const startquizz = async () => {

    }


    const checkAns = (e: React.MouseEvent<HTMLBRElement>) => {

    }


    const nextQuestion = () => {

    }

    return (  
    <div className="App">
        <h1>Quizz</h1>
        <button className="start" onClick={startquizz}></button>
        <p className="score">score:</p>
        <p>loading quizz ...</p>
        <QuestionCard />
        <button className="next" onClick={nextQuestion}> Next Question</button>
    </div>

    
    );
}
 
export default App;