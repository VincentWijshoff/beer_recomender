import makeRequest from '../util/requestHandler';
import getUID from '../util/uidFetcher';
import { useEffect, useState } from 'react';

const LikedBeers = () => {
    const [beerlist, setdata] = useState([]);
    useEffect(() => {
        const uid = getUID();
        getBeerList(uid).then((res) => {
            setdata(res);
        })
    }, []);
    return (
        <div className="beerbody beerlistbody">
            <div className="beerlist">
            {beerlist.map((item, i) => {
                return (
                    <div className="beerlistitem topx" key={i}>
                        <div className="beerlistpicture">{item.picture}</div>
                        <div className="beerlistname">{item.name}</div>
                        <div className="likedislikelist">
                           
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
    return makeRequest("/likedbeersforuser/" + uid);
}

export default LikedBeers;