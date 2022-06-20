export default function signUpUser(firstName, lastName) {
  const promise = new Promise(((resolve, reject) => {
    resolve({
      firstName,
      lastName,
    });
    reject(new Error());
  }));
  return promise;
}
