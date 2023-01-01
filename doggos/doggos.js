const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(DOG_URL);

promise
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse) {
    console.log(breeds);
  });

console.log("this will log first");