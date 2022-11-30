import getUID from '../util/uidFetcher';

const LikedBeers = () => {
    const uid = getUID();
    console.log(uid);
    return (
        <div className="beerbody">
            LIKED BEERS
        </div>
      );
}

export default LikedBeers;