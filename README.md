Goal: create a website where you can hear jokes told by a robot.

tools used: html, css, javascript, APIs

Challenge:
Getting the topics buttons to filter the jokes the api pulls by changing the api url.

Solution:
create two functions. 

The first parses the highlighted topics in a way so that there is no comma at the end (which would break the url)

The second functions runs after the joke has played, and resets the formating done by the first. This is important because often the first function deletes or adds commas to make the url work. 

Both functions run everytime the "New Joke" button is clicked

