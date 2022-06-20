export default function getFullResponseFromAPI(success) {
  const promise = new Promise(((resolve, reject) => {
    if (success === true) {
      const response = {
        status: 200,
        body: 'Success',
      };
      resolve(response);
    } else if (success === false) {
      reject(('Error: The fake API is not working currently'));
    }
  }));
    promise.catch(((err) => console.log(err)))

  return promise;
}
