const getBeerId = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('beerid');
}

export default getBeerId;