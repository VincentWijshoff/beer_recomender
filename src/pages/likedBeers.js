import makeRequest from '../util/requestHandler';
import getUID from '../util/uidFetcher';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const LikedBeers = () => {
    const [beerlist, setdata] = useState([]);
    useEffect(() => {
        const uid = getUID();
        getBeerList(uid).then((res) => {
            setdata(res);
        })
    }, []);
    const uid = getUID();
    return (
        <div className="beerbody beerlistbody">
            <div className="beerlist">
            {beerlist.map((item, i) => {
                return (
                    <div className="beerlistitem topx" key={i}>
                        <div className="beerlistpicture">{item.picture}</div>
                        <div className="beerlistname">{item.name}</div>
                        <div className="likedislikelist">
                            <button class="deletebutton" onClick={() => {removeBeer(item.id, uid)}}><FontAwesomeIcon icon={faTrashCan}/></button>
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

const removeBeer = async (beerid, uid) => {
    await makeRequest("/removelikedbeer/" + beerid + "/" + uid);
    window.location.href = "/likedBeers?uid=" + uid;
}

export default LikedBeers;