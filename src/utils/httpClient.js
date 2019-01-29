const httpClient = {};

httpClient.defaults = {
  headers: {}
};

httpClient.request = async ({
  headers = {},
  path = '/',
  method = 'GET',
  queryStringObject = {},
  payload = {},
}) => {
  return new Promise((resolve, reject) => {
    let requestUrl = `${path}?`;
    let counter = 0;

    for (let queryKey in queryStringObject){
      if(queryStringObject.hasOwnProperty(queryKey)){
        counter += 1;

        if (counter > 1) {
          requestUrl += '&';
        }

        requestUrl += `${queryKey}=${queryStringObject[queryKey]}`;
      }
    }

    const xhr = new XMLHttpRequest();

    xhr.open(method, requestUrl, true);
    xhr.setRequestHeader('Content-type', 'application/json');

    headers = Object.assign(httpClient.defaults.headers, headers);

    for(let headerKey in headers){
      if (headers.hasOwnProperty(headerKey)) {
        xhr.setRequestHeader(headerKey, headers[headerKey]);
      }
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        const statusCode = xhr.status;
        const responseReturned = xhr.responseText;

        try {
          const parsedResponse = JSON.parse(responseReturned);
          resolve({statusCode, responsePayload: parsedResponse});
        } catch (error){
          reject(error);
        }
      }
    };

    const payloadString = JSON.stringify(payload);

    xhr.send(payloadString);
  });
};

export default httpClient;



