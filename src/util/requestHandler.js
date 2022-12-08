
const makeRequest = async (request) => {
    const response = await fetch(request);
    return response.json();
}

export default makeRequest;