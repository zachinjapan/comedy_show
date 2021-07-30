const button = document.getElementById('joke-button');

// get joke from joke API
async function getJoke() {
    // 
    let jokeText = document.querySelector("h3");

    // joke variable to use in the if statment to determine if it is a two part joke
    let joke = "";

    const apiUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

    try {
        // fetch the api
        const response = await fetch(apiUrl);
        // put the response into a variable
        const data = await response.json();
        // testing if it is a one part or two part joke
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        };
        console.log(joke);

        jokeText.innerHTML = joke;

    } catch (error) {
        console.log("whoops", error);

    }
};

// event listner 
button.addEventListener('click', getJoke);