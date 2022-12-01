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
                    <div className="beerlistitem">{item.name}</div>
                )
            })}
            </div>
        </div>
      );
}

export default LikedBeers;