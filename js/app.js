// top secret free key
const key = "88bf1bb3fa72425291be899bd46cff65";

// DOM Elements

const button = document.getElementById("joke-button");

button.addEventListener("click", getJoke);

const jokeText = document.querySelector("h3");

const title = document.querySelector("h1");

const robot = document.getElementById("robot");

// type of jokes DOM Elements

const programmingButton = document.getElementById("programming");

const miscellaneousButton = document.getElementById("miscellaneous");

const punButton = document.getElementById("pun");

const spookyButton = document.getElementById("spooky");

const darkButton = document.getElementById("dark");

const christmasButton = document.getElementById("christmas");

// setting button DOM Elements

const musicButton = document.getElementById("music");

const nameButton = document.getElementById("name");

const customJokeButton = document.getElementById("custom-joke");

// variables to decide type of joke

let Programming = "";
let Pun = "";
let Spooky = "";
let Dark = "";
let Christmas = "";
let Miscellaneous = "";

// get joke from joke API
async function getJoke() {
  // joke variable to use in the if statment to determine if it is a two part joke
  let joke = "";
  let apiUrl = "";
  if (
    Programming === "" &&
    Pun === "" &&
    Spooky == "" &&
    Dark == "" &&
    Christmas === "" &&
    Miscellaneous === ""
  ) {
    apiUrl =
      "https://v2.jokeapi.dev/joke/Programming,Pun,Spooky,Dark,Christmas,Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  } else {
    apiUrl = `https://v2.jokeapi.dev/joke/${Programming}${Pun}${Spooky}${Dark}${Christmas}${Miscellaneous}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;
    // very important!! checks for ,? caused by changing topics which would break the url and then removes the comma
    apiUrl = apiUrl.replace(",?", "?");
  }
  try {
    // fetch the api
    let response = await fetch(apiUrl);
    // put the response into a variable
    let data = await response.json();

    // testing if it is a one part or two part joke
    if (
      (data.id !== 135) &
      (data.id !== 177) &
      (data.id !== 138) &
      (data.id !== 117)
    ) {
      console.log("joke ok");
    } else {
      // fetch the api
      response = await fetch(apiUrl);
      // put the response into a variable
      data = await response.json();
    }

    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }

    // disables the new joke button for around the time of
    disableJokeButton(joke.length * 80);
    disableStandardButton(nameButton, joke.length * 80);
    disableStandardButton(customJokeButton, joke.length * 80);

    jokeText.innerText = joke;

    textToSpeech(joke);
  } catch (error) {
    console.log("whoops", error);
  }

  // resetFormating();
}

// Text to speech API
// VoiceRSS Speech Function

function textToSpeech(text) {
  let jokeString = text;

  // VoiceRSS Speech Parameters
  VoiceRSS.speech({
    key: key,
    src: jokeString,
    hl: "en-us",
    r: 1,
    c: "mp3",
    f: "16khz_8bit_mono",
    ssml: false,
  });
}

// music

musicButton.addEventListener("click", backgroundMusic);

let musicButtonClickCount = 3;

let music = new Audio("./audio/8bit.mp3");

function backgroundMusic() {
  if (musicButtonClickCount % 2 === 1) {
    music.play();
    musicButtonClickCount++;
    alert(
      "Song: Sexy Bit Jazz \r\nArtist: Circuit Bent\r\n URL: https://circuitbentobox.bandcamp.com"
    );
  } else {
    music.pause();
    musicButtonClickCount++;
  }
}

// Name Changer

nameButton.addEventListener("click", changeTitle);

function changeTitle() {
  let newRobotName = prompt("What should we call this robot?");
  title.innerHTML = `${newRobotName}'s Comedy Show`;
  document.querySelector(
    "h3"
  ).innerHTML = `Hello. My name is ${newRobotName}<br><br> Want to hear a joke? <br><br> You can even select the topics!`;
}

function disableJokeButton(jokeLength) {
  button.innerText = "Audio Playing";
  button.style.opacity = 0.8;
  button.style.backgroundColor = "black";
  button.disabled = true;
  setTimeout(() => {
    button.innerText = "New Joke";
    button.style.opacity = 1;
    button.disabled = false;
    button.style.backgroundColor = "darkmagenta";
  }, jokeLength);
}

function disableStandardButton(buttonName, jokeLength) {
  buttonName.style.opacity = 0.5;
  buttonName.disabled = true;
  setTimeout(() => {
    buttonName.style.opacity = 1;
    buttonName.disabled = false;
  }, jokeLength);
}

// choose joke type function

programmingButton.addEventListener("click", function () {
  if (Programming === "") {
    programmingButton.classList.add("joke-type-button-on");
    Programming = "Programming,";
  } else {
    programmingButton.classList.remove("joke-type-button-on");
    Programming = "";
  }
});

miscellaneousButton.addEventListener("click", function () {
  if (Miscellaneous === "") {
    miscellaneousButton.classList.add("joke-type-button-on");
    Miscellaneous = "Miscellaneous,";
  } else {
    miscellaneousButton.classList.remove("joke-type-button-on");
    Miscellaneous = "";
  }
});

punButton.addEventListener("click", function () {
  if (Pun === "") {
    punButton.classList.add("joke-type-button-on");
    Pun = "Pun,";
  } else {
    punButton.classList.remove("joke-type-button-on");
    Pun = "";
  }
});

spookyButton.addEventListener("click", function () {
  if (Spooky === "") {
    spookyButton.classList.add("joke-type-button-on");
    Spooky = "Spooky,";
  } else {
    spookyButton.classList.remove("joke-type-button-on");
    Spooky = "";
  }
});

darkButton.addEventListener("click", function () {
  if (Dark === "") {
    darkButton.classList.add("joke-type-button-on");
    Dark = "Dark,";
  } else {
    darkButton.classList.remove("joke-type-button-on");
    Dark = "";
  }
});

christmasButton.addEventListener("click", function () {
  if (Christmas === "") {
    christmasButton.classList.add("joke-type-button-on");
    Christmas = "Christmas,";
  } else {
    christmasButton.classList.remove("joke-type-button-on");
    Christmas = "";
  }
});

// function to write your own joke

customJokeButton.addEventListener("click", customJokeSetup);

function customJokeSetup() {
  let newJoke = prompt(
    "\nWhat joke would you like the robot to say?\n\n(it will give a 10 second countdown beore displaying) \n"
  );
  let countdown = "10,9,8,7,6,5,4,3,2,1";
  document.querySelector("h3").innerHTML = countdown;
  disableJokeButton(10000 + newJoke.length * 80);
  disableStandardButton(nameButton, 10000 + newJoke.length * 80);
  disableStandardButton(customJokeButton, 10000 + newJoke.length * 80);
  textToSpeech(countdown);
  setTimeout(() => {
    document.querySelector("h3").innerHTML = newJoke;
    textToSpeech(newJoke);
  }, 6500);
}
