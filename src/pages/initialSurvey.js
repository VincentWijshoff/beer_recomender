//import { event } from 'jquery';
import getUID from '../util/uidFetcher';

const InitialSurvey = () => {
    const uid = getUID();
    console.log(uid);

    let question = {q: "Which of the following types of beer do you like?", 
    a: ["Lager", "Strong", "White", "Wheat"]}

    return (
        <div>
            <div className="footer">
                <div className="initialsurveyTitle">Initial Survey</div>
            </div>
            <div className="initialsurveybody">
                <div className="questionInitialSurvey">{question.q}</div>

                {/* <div className="answerlistitem" onDrop={(event)=> drop(event)} onDragOver={(event) => allowDrop(event)} >ANDWER</div> */}

                <div className="answerInitialSurvey">
                {
                    question.a.map((answer) => {
                        return (
                        // <div className="answerlistitem" draggable="true" onDragStart={(event) => drag(event)} >{answer}</div>
                        <div className="answerlistitem" >{answer}</div>
                    )})
                }
                </div>


            </div>

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