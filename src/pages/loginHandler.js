import logo from '../logo.svg';

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
    console.log(uName);
    console.log(pWord);
    // if not correct or not exist go back to home page, otherwise go to beer page
    setTimeout(() => {
        window.location.href = "/";
    }, 3000);
}

export default LoginHandler;