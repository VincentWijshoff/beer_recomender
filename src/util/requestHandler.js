
const makeRequest = async (request) => {
    console.log(process.env.REACT_APP_API_BASE_URL + request)
    const response = await fetch(process.env.REACT_APP_API_BASE_URL + request);
    return response.json();
}

export default makeRequest;