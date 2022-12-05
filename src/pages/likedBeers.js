import getUID from '../util/uidFetcher';

const LikedBeers = () => {
    const uid = getUID();
    console.log(uid);
    let beerlist = [{name: "peter", rating: 3}, {name: "abraham", rating: 2}, {name: "constantijn", rating: 3}, {name: "constantijn", rating: 4}, {name: "constantijn", rating: 5}, {name: "constantijn", rating: 3}];
    return (
        <div className="beerbody beerlistbody">
            <div className="beerlist">
            {beerlist.map((item, i) => {
                return (
                    <div className="beerlistitem topx">
                        <div className="beerlistpicture">picture</div>
                        <div className="beerlistname">{item.name}</div>
                        <div className="likedislikelist">
                            <div className="rating">
  
                                <input type="radio" name={"rating_"+i} value="5" id={"5_"+i} onClick={() => rating(1, 5, uid)} checked={item.rating === 5 ? "true" : ""}/><label htmlFor={"5_"+i}>☆</label>
                                <input type="radio" name={"rating_"+i} value="4" id={"4_"+i} onClick={() => rating(1, 4, uid)} checked={item.rating === 4 ? "true" : ""}/><label htmlFor={"4_"+i}>☆</label>
                                <input type="radio" name={"rating_"+i} value="3" id={"3_"+i} onClick={() => rating(1, 3, uid)} checked={item.rating === 3 ? "true" : ""}/><label htmlFor={"3_"+i}>☆</label>
                                <input type="radio" name={"rating_"+i} value="2" id={"2_"+i} onClick={() => rating(1, 2, uid)} checked={item.rating === 2 ? "true" : ""}/><label htmlFor={"2_"+i}>☆</label>
                                <input type="radio" name={"rating_"+i} value="1" id={"1_"+i} onClick={() => rating(1, 1, uid)} checked={item.rating === 1 ? "true" : ""}/><label htmlFor={"1_"+i}>☆</label>

                            </div>
                        </div>    
                    </div>
                )
            })}
            </div>
        </div>
      );
}

const rating = (beerID, rating, uid) => {
    console.log(beerID);
    console.log(rating);
    // send to DB and reload page with new beer
    window.location.href = "/likedBeers?uid=" + uid;
}

export default LikedBeers;