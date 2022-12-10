import logo from '../logo.svg';
import makeRequest from '../util/requestHandler';

const LoginHandler = () => {
    tryLogin();
    return (
        <>
        <img src={logo} alt="logo" />
        </>
    );
}

const tryLogin = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const uName = urlParams.get('username');
    const pWord = urlParams.get('pswd');
    let response = await makeRequest("/login/"+uName+"/"+pWord); // {response: boolean, uid: string}
    if(response.response) {
        window.location.href = "/oneBeer?uid=" + response.uid;
        return;
    }
    window.location.href ="/";
}

export default LoginHandler;