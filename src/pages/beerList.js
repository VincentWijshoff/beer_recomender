import getUID from '../util/uidFetcher';

const BeerList = () => {
    const uid = getUID();
    console.log(uid);
    let beerlist = [{name: "peter"}, {name: "abraham"}, {name: "constantijn"}, {name: "constantijn"}, {name: "constantijn"}, {name: "constantijn"}, {name: "constantijn"}];
    return (
        <div className="beerbody beerlistbody">
            <div className="beerlist">
            {beerlist.map(item => {
                return (
                    <a href={"/onebeer?uid=" + uid + "&beerid=" + item.beerid}>
                        <div className="beerlistitem topx">
                            <div className="beerlistpicture">picture</div>
                            <div className="beerlistname">name</div>
                            <div className="beerlistdescription">description</div>    
                        </div>
                    </a>
                )
            })}
            </div>
        </div>
      );
}

export default BeerList;