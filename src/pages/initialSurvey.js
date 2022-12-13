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
    let likedBeers = [];

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
                            
                        <button className="answerlistitemDiv" id={'answer'+answer.id} onClick={() => {likedBeers = answerClicked(answer.id, likedBeers)}}>{answer.name}</button>
                            
                    )})
                }
                </div>


            </div>
            
            <div className='divNextQuestion'>
                <button className="nextQuestionButton" onClick={() => {qid = qid + 1; nextQuestion(uid, qid, likedBeers)}}>Next</button>
            </div>

            

        </div>
      );
}

const nextQuestion = (uid, qid, likedBeers) => {
    for(const beerID of likedBeers)
        makeRequest("/likebeer/" + beerID + "/" + uid);
    
    
    if(qid < 5)
        window.location.href = "/InitialSurvey?uid=" + uid + "&qid=" + qid.toString();
    else
        window.location.href = "/OneBeer?uid=" + uid;

}

const getBeerData = async (id) => {
    console.log(id);
    return makeRequest("/beerlistforquestion/" + id);
}

const answerClicked = (beerid, likedBeers) => {
    let i = likedBeers.indexOf(beerid);
    if(i == -1){
        console.log("not in list");
        likedBeers.push(beerid);
        document.getElementById("answer" + beerid).style.opacity = 0.6;
    }else{
        console.log("in list");
        likedBeers.splice(i, 1);
        document.getElementById("answer" + beerid).style.opacity = 1;
    }

    return likedBeers;

}

export default InitialSurvey;