import getUID from '../util/uidFetcher';

const OneBeer = () => {
    const uid = getUID();
    console.log(uid);
    return (
        <div className="beerbody onebeerbody">
            {/* we need a picture of a beer */}
            <div className="beerpicture">picture</div>
            {/* then an explenation */}
            <div className="beerdescription">Explenation</div>
            {/* then a like/dislike button */}
            <div className="likedislike">like dislike</div>
        </div>
      );
}

export default OneBeer;