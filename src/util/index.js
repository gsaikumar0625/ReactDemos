const options = {
    method: 'GET', // HTTP method (GET, POST, PUT, etc.)
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      userId: '1',
      mobileNumber: '9704164746',
    },
}; 

export const fetcher = url => fetch(url,options).then(r => r.json())