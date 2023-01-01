const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

function addDoggo () {
    const promise = fetch(BREEDS_URL);
    
    promise
      .then(function(response) {
        const processingPromise = response.json();
        
        return processingPromise;
      })
      .then(function(processedResponse) {
        const img = document.createElement('img');
        img.src = processedResponse.message;
        img.alt = "cute doggo";
    
        document.querySelector(".doggos").appendChild(img);
      });

}

document.querySelector('.add-doggo').addEventListener('click', addDoggo)


console.log("this will log first");