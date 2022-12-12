//import { event } from 'jquery';
import getUID from '../util/uidFetcher';
import getQID from '../util/qidFetcher';
import makeRequest from '../util/requestHandler';
import { useEffect, useState } from 'react';



const InitialSurvey = () => {
    const [beerlist, setdata] = useState([{
        name: "Loading...",
        image: "",
        explenation: "",
        id: 0,
    }]);
    const uid = getUID();
    console.log(uid);
    let qid = parseInt(getQID());
    console.log(qid);
    useEffect(() => {
        getBeerData(qid).then((res) => {
            setdata(res);
            console.log("res[0]: " + res[0]);
        })
    }, []);

    let question = "Which of the follor beers do you like?"

    return (
        <div>
            <div className="footer">
                <div className="initialsurveyTitle">Initial Survey</div>
            </div>
            <div className="initialsurveybody">
                <div className="questionInitialSurvey">{question}</div>

                {/* <div className="answerlistitem" onDrop={(event)=> drop(event)} onDragOver={(event) => allowDrop(event)} >ANDWER</div> */}

                <div className="answerInitialSurvey">
                {
                    beerlist.map((answer) => {
                        return (
                        <div className="answerlistitem" id={'answer'+answer.name} onClick={() => {console.log(answer.name)}}>{answer.name}</div>
                    )})
                }
                </div>


            </div>
            
            <div className='divNextQuestion'>
                <button className="nextQuestionButton" onClick={() => {qid = qid + 1; nextQuestion(uid, qid)}}>Next</button>
            </div>

            

        </div>
      );
}

const nextQuestion = (uid, qid) => {
    if(qid < 5)
        window.location.href = "/InitialSurvey?uid=" + uid + "&qid=" + qid.toString();
    else
        window.location.href = "/OneBeer?uid=" + uid;

}

const getBeerData = async (id) => {
    console.log(id);
    return makeRequest("/beerlistforquestion/" + id);
}



export default InitialSurvey;