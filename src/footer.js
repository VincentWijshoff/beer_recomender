import getUID from "./util/uidFetcher";

// actually header
const Footer = () => {
    const uid = getUID();
    return(
        <div className="footer">
            <a href={"/oneBeer?uid=" + uid} className="footerItem">Top Recommendation</a>
            <a href={"/beerList?uid=" + uid} className="footerItem">Recommendation list</a>
            <a href={"/likedBeers?uid=" + uid} className="footerItem">Liked Beers</a>
        </div>
    );
}

export default Footer;