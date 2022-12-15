//import { event } from 'jquery';
import getUID from '../util/uidFetcher';
import getQID from '../util/qidFetcher';
import makeRequest from '../util/requestHandler';
import { useEffect, useState } from 'react';



const InitialSurvey = () => {
    const [beerlist, setdata] = useState([{
        name: "Loading...",
        picture: "",
        labels: {abv: 0, ibu:0, organic:0, servingTemperature:0, color: "white"},
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

    let question = "Select all beers which you like:"
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
                            
                        <button className="answerlistitemDiv" id={'answer'+answer.id} onClick={() => {console.log(answer); likedBeers = answerClicked(answer.id, likedBeers)}}>
                            
                            <div className="beernameAnswer">
                                {answer.name}
                            </div>
                            <div className="imageandlabelsAnswer">
                                <div className="divimg"><img src={answer.picture} alt="" /></div>
                                <div className="labels1Answer">
                                    <div className="label1Answer">{"abv: " + answer.labels.abv + "%"}</div>
                                    <div className="label2Answer">{"ibu: " + answer.labels.ibu}</div>
                                    <div className="label3Answer">{"is organic: " + answer.labels.organic}</div>
                                </div>
                                <div className="labels2Answer">
                                    <div className="label1Answer">{"serving at: " + answer.labels.servingTemperature}</div>
                                    <div className="label2Answer">{"beer color: "}
                                        <span className="dot" style={{backgroundColor: '#'+ answer.labels.color}}></span>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="iconAndNameIS">
                                
                                
                            </div> */}
        
                                
                        </button>
                            
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
        document.getElementById("answer" + beerid).style.opacity = 1;
    }else{
        console.log("in list");
        likedBeers.splice(i, 1);
        document.getElementById("answer" + beerid).style.opacity = 0.7;
    }

    return likedBeers;

}

export default InitialSurvey;