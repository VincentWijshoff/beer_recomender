import makeRequest from '../util/requestHandler';
import getUID from '../util/uidFetcher';
import { useEffect, useState } from 'react';

const BeerList = () => {
    const uid = getUID();
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
            {beerlist.map(item => {
                return (
                    <a href={"/onebeer?uid=" + uid + "&beerid=" + item.id}>
                        <div className="beerlistitem">
                            <div className="beerlistpicture"><img src={item.picture} alt="" className="listpicture"/></div>
                            <div className="beerlistname">{item.name}</div>
                            <div className="beerlistdescription">{item.description}</div>    
                        </div>
                    </a>
                )
            })}
            </div>
        </div>
      );
}

const getBeerList = (uid) => {
    // get the beer list for the given uid
    return makeRequest("/beerlistforuser/" + uid);
}

export default BeerList;