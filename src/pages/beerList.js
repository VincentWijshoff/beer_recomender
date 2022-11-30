import getUID from '../util/uidFetcher';

const BeerList = () => {
    const uid = getUID();
    console.log(uid);
    return (
        <div className="beerbody">
            BEER LIST
        </div>
      );
}

export default BeerList;