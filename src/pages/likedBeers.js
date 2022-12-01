import getUID from '../util/uidFetcher';

const LikedBeers = () => {
    const uid = getUID();
    console.log(uid);
    let beerlist = [{name: "peter"}, {name: "abraham"}, {name: "constantijn"}, {name: "constantijn"}, {name: "constantijn"}, {name: "constantijn"}, {name: "constantijn"}];
    return (
        <div className="beerbody beerlistbody">
            <div className="beerlist">
            {beerlist.map(item => {
                return (
                    <div className="beerlistitem topx">
                        <div className="beerlistpicture">picture</div>
                        <div className="beerlistname">name</div>
                        <div className="likedislikelist">
                            <div className="rate">
                                <input type="radio" id="star5" name="rate" value="5" onClick={() => rating(1, 5, uid)}/>
                                <label htmlFor="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" value="4" onClick={() => rating(1, 4, uid)}/>
                                <label htmlFor="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" value="3" onClick={() => rating(1, 3, uid)}/>
                                <label htmlFor="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" value="2" onClick={() => rating(1, 2, uid)}/>
                                <label htmlFor="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" value="1" onClick={() => rating(1, 1, uid)} checked="checked"/>
                                <label htmlFor="star1" title="text">1 star</label>
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