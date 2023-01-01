const DOGS_URL = "https://dog.ceo/api/breeds/image/random";

function addDoggo () {

    // show loading spinner

    const promise = fetch(DOGS_URL);
    
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

        // stop showing loading spinner
      });

}

document.querySelector('.add-doggo').addEventListener('click', addDoggo)


const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

fetch(BREEDS_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // console.log(Object.keys(data.message))
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject)
        console.log(breedsArray)

        const select = document.querySelector('.breeds');

        for (let i=0; i < breedsArray.length; i++) {
            const option = document.createElement('option')
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        }

    })
