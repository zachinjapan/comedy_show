// API KEYS

var token = config.MY_API_TOKEN;
var key = config.SECRET_API_KEY;

// DOM Elements

const button = document.getElementById('joke-button');

button.addEventListener('click', getJoke);

const jokeText = document.querySelector("h3");

let title = document.querySelector("h1");

// get joke from joke API
async function getJoke() {


    disableButton();

    // joke variable to use in the if statment to determine if it is a two part joke
    let joke = "";


    const apiUrl = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

    try {
        // fetch the api
        const response = await fetch(apiUrl);
        // put the response into a variable
        const data = await response.json();
        console.log(data);
        // testing if it is a one part or two part joke
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        };

        jokeText.innerHTML = joke;


        textToSpeech(joke);


    } catch (error) {
        console.log("whoops", error);

    }
};


// Text to speech API
// VoiceRSS Speech Function

function textToSpeech(text) {

    let jokeString = text;

    // VoiceRSS Speech Parameters
    VoiceRSS.speech({
        key: key,
        src: jokeString,
        hl: 'en-us',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false,
    });

}



// music easter egg

const robot = document.getElementById("robot");

robot.addEventListener('click', backgroundMusic);

let robotClickCount = 1;

let music = new Audio("./audio/8bit.mp3");

function backgroundMusic() {
    if (robotClickCount >= 20 && robotClickCount % 2 == 0) {
        music.play();
        robotClickCount++;
        alert("Song: Sexy Bit Jazz \r\nArtist: Circuit Bent\r\n URL: https://circuitbentobox.bandcamp.com");


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

title.addEventListener("click", changeTitle);

let titleClickCount = 1;

function changeTitle() {
    if (titleClickCount === 20) {
        let newRobotName = prompt("What should we call this robot?")
        title.innerHTML = (newRobotName + "'s Comedy Show");
        jokeText.innerHTML = ("<h3> Hello. My name is " + newRobotName + ". <br><br>Want to hear a joke? </h3>");
        textToSpeech(jokeText.textContent);
        titleClickCount++;
    } else {
        titleClickCount++;
    }
}

// text easter egg

jokeText.addEventListener("click", customText);

let jokeClickCount = 1;

function customText() {

}

// disable button function

function disableButton() {
    button.style.visibility = "hidden";
    button.disabled = true;
    setTimeout(() => {

        button.style.visibility = "visible";
        button.disabled = false;
    }, 9000)
}