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
        <div className="beerbody onebeerbody">
            {/* we need a picture of a beer */}
            <div className="beerpicture">{data.image}</div>
            {/* then an explenation */}
            <div className="beerdescription">
                <div className="beername">{data.name}</div>
                <div>{data.explenation}</div>
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
        return makeRequest("/beerfromid/" + beerid);
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