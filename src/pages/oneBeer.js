import { useEffect, useState } from 'react';
import getBeerId from '../util/beerIDFeetcher';
import makeRequest from '../util/requestHandler';
import getUID from '../util/uidFetcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

const OneBeer = () => {
    const [data, setdata] = useState({
        name: "Loading...",
        image: "",
        explenation: "",
        id: 0,
        beerInfo: [],
        explanationid: 0
    });
    const uid = getUID();
    useEffect(() => {
        const beerID = getBeerId();
        const uid = getUID();
        getBeerData(uid, beerID).then((res) => {
            setdata(res);
        })
    }, []);
    return (
        <div className="beerbody">
            {/* we need a picture of a beer */}
            <div className="beerpicture">
                <div className="beerimagecenter">
                    <img src={data.image} alt="" />
                </div>
                <div className="modal-container">
                    <input id="modal-toggle" type="checkbox"/>
                    <button>More info</button>
                    <div className="modal-backdrop">
                        <div className="modal-content">
                        <label className="modal-close" for="modal-toggle">close</label>
                        <h2 className="modalTItle">{data.name}</h2>
                        <hr />
                        {
                            data.beerInfo.map((info) => {
                                return(
                                    <div>
                                        <div className="modalBeerInfoHeader">{info[0]}</div>
                                        <div className="modalBeerInfo">{info[1]}</div>
                                    </div>

                                    
                            )})
                        }
                        
                        {/* <label className="modal-close button" for="modal-toggle">Close</label> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* then an explenation */}
            <div className="beerdescription">
                <div className="divname">
                    <div className="beername">{data.name}</div>
                    <div className="explanID">{"Explanation " + data.explanationid}</div>
                </div>
                
                <div className="beerexpl">{data.explenation}</div>
            </div>
            {/* then a like/dislike button */}
            <div className="likedislike">
            <button className="likedislikebutton" id="green" onClick={() => {likeBeer(data.id, uid)}}><FontAwesomeIcon icon={faThumbsUp}/></button>
            <button className="likedislikebutton" id="red" onClick={() => {dislikeBeer(data.id, uid)}}><FontAwesomeIcon icon={faThumbsDown} /></button>
            </div>
        </div>
      );
}

const getBeerData = async (uid, beerid) => {
    if(beerid){
        // get the beer from the given ID
        return makeRequest("/beerfromid/" + beerid + "/" + uid);
    }
    // get the next recommended beer for this person
    return makeRequest("/nextbeerforuser/" + uid);
}

const likeBeer = (beerID, uid) => {
    // send to DB and reload page with new beer
    makeRequest("/likebeer/" + beerID + "/" + uid);
    window.location.href = "/oneBeer?uid=" + uid;
}

const dislikeBeer = (beerID, uid) => {
    // send to DB and reload page with new beer
    makeRequest("/dislikebeer/" + beerID + "/" + uid);
    window.location.href = "/oneBeer?uid=" + uid;
}

export default OneBeer;