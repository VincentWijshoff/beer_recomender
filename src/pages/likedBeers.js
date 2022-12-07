import getUID from '../util/uidFetcher';

const LikedBeers = () => {
    const uid = getUID();
    const beerlist = getBeerList(uid);
    return (
        <div className="beerbody beerlistbody">
            <div className="beerlist">
            {beerlist.map((item, i) => {
                return (
                    <div className="beerlistitem topx">
                        <div className="beerlistpicture">{item.picture}</div>
                        <div className="beerlistname">{item.name}</div>
                        <div className="likedislikelist">
                            <div className="rating">
  
                                <input type="radio" name={"rating_"+i} value="5" id={"5_"+i} onClick={() => rating(item.id, 5, uid)} checked={item.rating === 5 ? "true" : ""}/><label htmlFor={"5_"+i}>☆</label>
                                <input type="radio" name={"rating_"+i} value="4" id={"4_"+i} onClick={() => rating(item.id, 4, uid)} checked={item.rating === 4 ? "true" : ""}/><label htmlFor={"4_"+i}>☆</label>
                                <input type="radio" name={"rating_"+i} value="3" id={"3_"+i} onClick={() => rating(item.id, 3, uid)} checked={item.rating === 3 ? "true" : ""}/><label htmlFor={"3_"+i}>☆</label>
                                <input type="radio" name={"rating_"+i} value="2" id={"2_"+i} onClick={() => rating(item.id, 2, uid)} checked={item.rating === 2 ? "true" : ""}/><label htmlFor={"2_"+i}>☆</label>
                                <input type="radio" name={"rating_"+i} value="1" id={"1_"+i} onClick={() => rating(item.id, 1, uid)} checked={item.rating === 1 ? "true" : ""}/><label htmlFor={"1_"+i}>☆</label>

                            </div>
                        </div>    
                    </div>
                )
            })}
            </div>
        </div>
      );
}

const getBeerList = (uid) => {
    // get the list of liked beers for the user
    console.log(uid);
    return [{name: "peter", rating: 3, picture:"picture", id:1},
    {name: "peter", rating: 4, picture:"picture", id:1},
    {name: "peter", rating: 5, picture:"picture", id:1},
    {name: "peter", rating: 1, picture:"picture", id:1},
    {name: "peter", rating: 2, picture:"picture", id:1},
    {name: "peter", rating: 3, picture:"picture", id:1},
    {name: "peter", rating: 4, picture:"picture", id:1}]
}

const rating = (beerID, rating, uid) => {
    console.log(beerID);
    console.log(rating);
    // send to DB and reload page with new beer
    window.location.href = "/likedBeers?uid=" + uid;
}

export default LikedBeers;