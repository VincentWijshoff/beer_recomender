import getUID from '../util/uidFetcher';

const OneBeer = () => {
    const uid = getUID();
    console.log(uid);
    return (
        <div className="beerbody">
            ONE BEER
        </div>
      );
}

export default OneBeer;