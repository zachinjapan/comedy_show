// top secret free key 
const key = "53fcb560bcac4b8dbdf39007958f99b7";

// DOM Elements

const button = document.getElementById('joke-button');

button.addEventListener('click', getJoke);

const jokeText = document.querySelector("h3");

const title = document.querySelector("h1");

const robot = document.getElementById("robot");

// type of jokes DOM Elements 

const programmingButton = document.getElementById('programming');

const miscellaneousButton = document.getElementById('miscellaneous');

const punButton = document.getElementById('pun');

const spookyButton = document.getElementById('spooky');

const darkButton = document.getElementById("dark");

const christmasButton = document.getElementById("christmas");

// setting button DOM Elements

const musicButton = document.getElementById("music");

const nameButton = document.getElementById("name");

const colorButton = document.getElementById("robot-color");


// variables to decide type of joke

let Programming = "";
let Pun = "";
let Spooky = "";
let Dark = ""
let Christmas = "";
let Miscellaneous = "";

programmingButton.classList.remove("joke-type-button-on");
punButton.classList.remove("joke-type-button-on");
spookyButton.classList.remove("joke-type-button-on");
darkButton.classList.remove("joke-type-button-on");
christmasButton.classList.remove("joke-type-button-on");
miscellaneousButton.classList.remove("joke-type-button-on");



// get joke from joke API
async function getJoke() {

    disableButton();

    // joke variable to use in the if statment to determine if it is a two part joke
    let joke = "";

    let apiUrl = "https://v2.jokeapi.dev/joke/" + Programming + Pun + Spooky + Dark + Christmas + Miscellaneous + "?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

    fixFormating();

    apiUrl = "https://v2.jokeapi.dev/joke/" + Programming + Pun + Spooky + Dark + Christmas + Miscellaneous + "?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

    try {
        // fetch the api
        const response = await fetch(apiUrl);
        // put the response into a variable
        const data = await response.json();

        // testing if it is a one part or two part joke
        if (data.id !== 135 & data.id !== 177) {
            // have a party
        } else {
            // fetch the api
            const response = await fetch(apiUrl);
            // put the response into a variable
            const data = await response.json();
        }

        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        };

        jokeText.innerHTML = joke;
        f

        textToSpeech(joke);


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



// music 

musicButton.addEventListener('click', backgroundMusic);

let robotClickCount = 3;

let music = new Audio("./audio/8bit.mp3");

function backgroundMusic() {
    if (robotClickCount % 2 === 1) {
        music.play();
        robotClickCount++
        alert("Song: Sexy Bit Jazz \r\nArtist: Circuit Bent\r\n URL: https://circuitbentobox.bandcamp.com");
    } else {
        music.pause();
        robotClickCount++;
    }
};

// Name Changer

nameButton.addEventListener("click", changeTitle);


function changeTitle() {

    let newRobotName = prompt("What should we call this robot?")
    title.innerHTML = (newRobotName + "'s Comedy Show");
    document.querySelector("h3").innerHTML = (" Hello. My name is " + newRobotName + "<br><br> Want to hear a joke? <br><br> You can even select the topics!");
    textToSpeech(jokeText.textContent);
};


function disableButton() {
    button.innerText = "Audio Playing";
    button.style.opacity = (0.8);
    button.style.backgroundColor = ("black");
    button.disabled = true;
    setTimeout(() => {
        button.innerText = "New Joke";
        button.style.opacity = (1);
        button.disabled = false;
        button.style.backgroundColor = ("darkmagenta");
    }, 10000)
};

// choose joke type function


programmingButton.addEventListener("click", function () {
    if (Programming === "Programming,") {
        programmingButton.classList.remove("joke-type-button-on");
        Programming = "";

    } else {
        programmingButton.classList.add("joke-type-button-on");
        Programming = "Programming,";
    }
});


miscellaneousButton.addEventListener("click", function () {
    if (Miscellaneous === "Miscellaneous") {
        miscellaneousButton.classList.remove("joke-type-button-on");
        Miscellaneous = "";
    } else {
        miscellaneousButton.classList.add("joke-type-button-on");
        Miscellaneous = "Miscellaneous";
    }
});


punButton.addEventListener("click", function () {
    if (Pun === "Pun,") {
        punButton.classList.remove("joke-type-button-on");
        Pun = "";
    } else {
        punButton.classList.add("joke-type-button-on");
        Pun = "Pun,";
    }
});


spookyButton.addEventListener("click", function () {
    if (Spooky === "Spooky,") {
        spookyButton.classList.remove("joke-type-button-on");
        Spooky = "";
    } else {
        spookyButton.classList.add("joke-type-button-on");
        Spooky = "Spooky,";
    }
});


darkButton.addEventListener("click", function () {
    if (Dark === "Dark,") {
        darkButton.classList.remove("joke-type-button-on");
        Dark = "";
    } else {
        darkButton.classList.add("joke-type-button-on");
        Dark = "Dark,";
    }
});


christmasButton.addEventListener("click", function () {
    if (Christmas === "Christmas,") {
        christmasButton.classList.remove("joke-type-button-on");
        Christmas = "";
    } else {
        christmasButton.classList.add("joke-type-button-on");
        Christmas = "Christmas,";
    }
});

// fixes the formating to make sure the last tag doesn't end in a ,""

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

// resets the formating so that when tags are added and subtracted they include the comma and sets the stage for the fix formating function

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