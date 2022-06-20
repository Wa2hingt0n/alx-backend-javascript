export default function getFullResponseFromAPI(success) {
  const promise = new Promise(((resolve, reject) => {
    if (success === true) {
      const response = {
        status: 200,
        body: 'Success',
      };
      resolve(response);
    } else if (success === false) {
      reject(new Error(': The fake API is not working currently'));
    }
  }));

  return promise;
}
