// API token and ft

// const token = config.MY_API_TOKEN;

// const key = config.SECRET_API_KEY;

// DOM Elements

const button = document.getElementById('joke-button');

button.addEventListener('click', getJoke);

const jokeText = document.querySelector("h3");

const title = document.querySelector("h1");

// type of jokes DOM Elements 

const programmingButton = document.getElementById('programming');

const miscellaneousButton = document.getElementById('miscellaneous');

const punButton = document.getElementById('pun');

const spookyButton = document.getElementById('spooky');

const darkButton = document.getElementById("dark");

const christmasButton = document.getElementById("christmas");


// variables to decide type of joke

let Programming = "Programming,";
let Pun = "Pun,";
let Spooky = "Spooky,";
let Dark = "Dark,"
let Christmas = "Christmas,";
let Miscellaneous = "Miscellaneous";

// get joke from joke API
async function getJoke() {

    disableButton();

    // joke variable to use in the if statment to determine if it is a two part joke
    let joke = "";

    let apiUrl = "https://v2.jokeapi.dev/joke/" + Programming + Pun + Spooky + Dark + Christmas + Miscellaneous + "?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

    console.log(apiUrl);
    fixFormating();
    console.log(apiUrl);

    apiUrl = "https://v2.jokeapi.dev/joke/" + Programming + Pun + Spooky + Dark + Christmas + Miscellaneous + "?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

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


        // textToSpeech(joke);


    } catch (error) {
        console.log("whoops", error);

    }

    resetFormating();
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
};


// disable button function

function disableButton() {
    button.style.visibility = "hidden";
    button.disabled = true;
    setTimeout(() => {

        button.style.visibility = "visible";
        button.disabled = false;
    }, 1000)
};

// choose joke type function


programmingButton.addEventListener("click", function () {
    if (Programming === "Programming,") {
        programmingButton.classList.remove("joke-type-button-on");
        Programming = "";
        console.log("no programming jokes");

    } else {
        programmingButton.classList.add("joke-type-button-on");
        Programming = "Programming,";
        console.log("programming jokes included");
    }
});


miscellaneousButton.addEventListener("click", function () {
    if (Miscellaneous === "Miscellaneous") {
        miscellaneousButton.classList.remove("joke-type-button-on");
        Miscellaneous = "";
        console.log("no Misc jokes");
    } else {
        miscellaneousButton.classList.add("joke-type-button-on");
        Miscellaneous = "Miscellaneous";
        console.log("Misc jokes included");
    }
});


punButton.addEventListener("click", function () {
    if (Pun === "Pun,") {
        punButton.classList.remove("joke-type-button-on");
        Pun = "";
        console.log("no pun jokes");
    } else {
        punButton.classList.add("joke-type-button-on");
        Pun = "Pun,";
        console.log("Pun jokes included");
    }
});


spookyButton.addEventListener("click", function () {
    if (Spooky === "Spooky,") {
        spookyButton.classList.remove("joke-type-button-on");
        Spooky = "";
        console.log("no spooky jokes");
    } else {
        spookyButton.classList.add("joke-type-button-on");
        Spooky = "Spooky,";
        console.log("Spooky jokes included");
    }
});


darkButton.addEventListener("click", function () {
    if (Dark === "Dark,") {
        darkButton.classList.remove("joke-type-button-on");
        Dark = "";
        console.log("no dark jokes");
    } else {
        darkButton.classList.add("joke-type-button-on");
        Dark = "Dark,";
        console.log("dark jokes included");
    }
});


christmasButton.addEventListener("click", function () {
    if (Christmas === "Christmas,") {
        christmasButton.classList.remove("joke-type-button-on");
        Christmas = "";
        console.log("no christmas jokes");
    } else {
        christmasButton.classList.add("joke-type-button-on");
        Christmas = "Christmas,";
        console.log("Christmas jokes included");
    }
});


function fixFormating() {
    if (Miscellaneous === "" && Christmas === "" && Dark === "" && Spooky === "" && Pun === "") {
        Programming = "Programming"
    } else if (Miscellaneous === "" && Christmas === "" && Dark === "" && Spooky === "") {
        Pun = "Pun"
    } else if (Miscellaneous === "" && Christmas === "" && Dark === "") {
        Spooky = "Spooky"
    } else if (Miscellaneous === "" && Christmas === "") {
        Dark = "Dark"
    } else if (Miscellaneous === "" && Christmas === "Christmas,") {
        Christmas = "Christmas";
    } else {
        console.log("didn't fix formatting ")
    }

}

function resetFormating() {
    if (Christmas === "Christmas") {
        Christmas = "Christmas,"
    }

    if (Dark === "Dark") {
        Dark = "Dark,"
    }

    if (Spooky === "Spooky") {
        Spooky = "Spooky,"
    }

    if (Pun === "Pun") {
        Pun = "Pun,"
    }

    if (Programming === "Programming") {
        Programming = "Programming,"
    } else {
        console.log("No reset formating needed")
    }
}