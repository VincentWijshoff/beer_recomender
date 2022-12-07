import getUID from '../util/uidFetcher';

const OneBeer = () => {
    const uid = getUID();
    const data = getBeerData(uid);
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
                <input type="radio" id="star5" name="rate" value="5" onClick={() => rating(data.id, 5, uid)}/>
                <label htmlFor="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" onClick={() => rating(data.id, 4, uid)}/>
                <label htmlFor="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" onClick={() => rating(data.id, 3, uid)}/>
                <label htmlFor="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" onClick={() => rating(data.id, 2, uid)}/>
                <label htmlFor="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" onClick={() => rating(data.id, 1, uid)}/>
                <label htmlFor="star1" title="text">1 star</label>
            </div>
            </div>
        </div>
      );
}

const getBeerData = (uid) => {
    // get the next recommended beer for this person
    console.log(uid);
    return {name: "placeholder name", image:"placeholder image", explenation:"This is the explenation", id:1}
}

const rating = (beerID, rating, uid) => {
    console.log(beerID);
    console.log(rating);
    // send to DB and reload page with new beer
    window.location.href = "/oneBeer?uid=" + uid;
}

export default OneBeer;