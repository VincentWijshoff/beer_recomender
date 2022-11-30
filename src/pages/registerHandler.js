import logo from '../logo.svg';

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
    console.log(uName);
    console.log(pWord);
    // if already taken return to homepage, otherwise go to beer page
    setTimeout(() => {
        window.location.href = "/?uid=" + 1;
    }, 3000);
}

export default RegisterHandler;