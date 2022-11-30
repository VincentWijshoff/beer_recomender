import getUID from '../util/uidFetcher';

const BeerList = () => {
    const uid = getUID();
    console.log(uid);
    return (
        <div className="beerbody beerlistbody">
            <div className="beerlistitem">list item</div>
        </div>
      );
}

export default BeerList;