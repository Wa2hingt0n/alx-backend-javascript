export default function handleResponseFromAPI(promise) {
  const promiseObj = new Promise(((resolve, reject) => {
    const response = {
      status: 200,
      body: 'success',
    };
    if (promise instanceof Promise) resolve(response);
    reject(Error());
  }));

  promiseObj.then(() => {
    console.log('Got a response from the API');
  });
  promiseObj.catch(((err) => console.log(err)));

  return promiseObj;
}
