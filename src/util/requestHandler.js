
const makeRequest = async (request) => {
    const response = await fetch(process.env.REACT_APP_API + request);
    return response.json();
}

export default makeRequest;