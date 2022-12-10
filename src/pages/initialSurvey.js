//import { event } from 'jquery';
import getUID from '../util/uidFetcher';
import getQID from '../util/qidFetcher';

const InitialSurvey = () => {
    const uid = getUID();
    console.log(uid);
    const qid = parseInt(getQID());
    console.log(qid);

    // let question = {q: "Which of the following types of beer do you like?", 
    // a: ["Lager", "Strong", "White", "Wheat"]}

    let question1 = {q: "Which of the follor beers do you like?", a: ["Stella", "Maes", "Kristal", "Cara"]};
    let question2 = {q: "Which of the following types of beer do you like?", a: ["Lager", "Strong", "White", "Wheat"]};


    let questions = [question1, question2];
    // {
    //     q: "Which of the follor beers do you like?", a: ["Stella", "Maes", "Kristal", "Cara"],
    //     q: "Which of the follor beers do you like?", a: ["Stella", "Maes", "Kristal", "Cara"]
    // };
   // let i = index.i;

    return (
        <div>
            <div className="footer">
                <div className="initialsurveyTitle">Initial Survey</div>
            </div>
            <div className="initialsurveybody">
                <div className="questionInitialSurvey">{questions[qid].q}</div>

                {/* <div className="answerlistitem" onDrop={(event)=> drop(event)} onDragOver={(event) => allowDrop(event)} >ANDWER</div> */}

                <div className="answerInitialSurvey">
                {
                    questions[qid].a.map((answer) => {
                        return (
                        // <div className="answerlistitem" draggable="true" onDragStart={(event) => drag(event)} >{answer}</div>
                        <div className="answerlistitem" >{answer}</div>
                    )})
                }
                </div>


            </div>
            
            <a href={"/initialSurvey?qid=" + (qid+1)} className='nextQuestionButton'>
                <div className='divNextQuestion'>Next</div>
            </a>
            

        </div>
      );
}

// function allowDrop(ev) {
//     ev.preventDefault();
//   }
  
//   function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//   }
  
//   function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//   }

export default InitialSurvey;