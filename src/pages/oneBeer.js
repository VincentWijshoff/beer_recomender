import { useEffect, useState } from 'react';
import getBeerId from '../util/beerIDFeetcher';
import makeRequest from '../util/requestHandler';
import getUID from '../util/uidFetcher';

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
            <div className="rate">
                <input type="radio" id="star5" name="rate" value="5" onClick={() => rating(data.id,  uid)}/>
                <label htmlFor="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" onClick={() => rating(data.id,  uid)}/>
                <label htmlFor="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" onClick={() => rating(data.id,  uid)}/>
                <label htmlFor="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" onClick={() => rating(data.id,  uid)}/>
                <label htmlFor="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" onClick={() => rating(data.id,  uid)}/>
                <label htmlFor="star1" title="text">1 star</label>
            </div>
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

const rating = (beerID, uid) => {
    // send to DB and reload page with new beer
    makeRequest("/likebeer/" + beerID + "/" + uid);
    //TODO dislike request?
    window.location.href = "/oneBeer?uid=" + uid;
}

export default OneBeer;