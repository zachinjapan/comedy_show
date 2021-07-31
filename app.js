const button = document.getElementById('joke-button');

// event listner 
button.addEventListener('click', getJoke);

const jokeText = document.querySelector("h3");

// joke variable to use in the if statment to determine if it is a two part joke
let joke = "";

// get joke from joke API
async function getJoke() {


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


// music easter egg

const robot = document.getElementById("robot");

robot.addEventListener('click', backgroundMusic);

let robotClickCount = 1;

let music = new Audio("./audio/8bit.mp3");

function backgroundMusic() {
    if (robotClickCount >= 20 && robotClickCount % 2 == 0) {
        music.play();
        robotClickCount++;
    } else {
        if (robotClickCount >= 20 && (robotClickCount % 2 == 1)) {
            music.pause();
            robotClickCount++;
        } else {
            robotClickCount++;
        }
    }
};

// title easter egg

let title = document.querySelector("h1");

title.addEventListener("click", changeTitle);

let titleClickCount = 0;

function changeTitle() {
    if (titleClickCount >= 20) {
        let newRobotName = prompt("What should we call this robot?")
        title.innerHTML = (newRobotName + "'s Comedy Show");
        jokeText.innerHTML = ("<h3> Hello. My name is " + newRobotName + ". <br><br>Want to hear a joke? </h3>");
    } else {
        titleClickCount++;
    }
}