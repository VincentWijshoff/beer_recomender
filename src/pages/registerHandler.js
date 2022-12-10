import logo from '../logo.svg';
import makeRequest from '../util/requestHandler';

const RegisterHandler = () => {
    tryRegister();
    return (
        <>
        <img src={logo} alt="logo" />
        </>
    );
}

const tryRegister = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const uName = urlParams.get('txt');
    const pWord = urlParams.get('pswd');
    let response = await makeRequest("/register/"+uName+"/"+pWord); // {uid: string}
    window.location.href = "/oneBeer?uid=" + response.uid;
}

export default RegisterHandler;