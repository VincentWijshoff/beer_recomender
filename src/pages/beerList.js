import getUID from '../util/uidFetcher';

const BeerList = () => {
    const uid = getUID();
    const beerlist = getBeerList(uid);
    return (
        <div className="beerbody beerlistbody">
            <div className="beerlist">
            {beerlist.map(item => {
                return (
                    <a href={"/onebeer?uid=" + uid + "&beerid=" + item.id}>
                        <div className="beerlistitem topx">
                            <div className="beerlistpicture">{item.picture}</div>
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
    console.log(uid);
    return [{picture: "picture", name: "Placeholder name", description:"description placeholder", id:1}, 
    {picture: "picture", name: "Placeholder name", description:"description placeholder", id:1}, 
    {picture: "picture", name: "Placeholder name", description:"description placeholder", id:1},
    {picture: "picture", name: "Placeholder name", description:"description placeholder", id:1},
    {picture: "picture", name: "Placeholder name", description:"description placeholder", id:1},
    {picture: "picture", name: "Placeholder name", description:"description placeholder", id:1},
    {picture: "picture", name: "Placeholder name", description:"description placeholder", id:1},
    {picture: "picture", name: "Placeholder name", description:"description placeholder", id:1}];
}

export default BeerList;