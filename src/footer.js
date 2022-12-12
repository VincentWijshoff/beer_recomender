import getUID from "./util/uidFetcher";

// actually header
const Footer = () => {
    const uid = getUID();
    return(
        <div className="footer">
            <a href={"/oneBeer?uid=" + uid} className="footerItem">One beer</a>
            <a href={"/beerList?uid=" + uid} className="footerItem">Beer list</a>
            <a href={"/likedBeers?uid=" + uid} className="footerItem">Liked Beers</a>
        </div>
    );
}

export default Footer;