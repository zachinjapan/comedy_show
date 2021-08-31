Goal: create a website where you can hear jokes told by a robot.

tools used: html, css, javascript, APIs

Challenge:
getting the topics buttons to filter the jokes the api pulls by changing the api url.

Solution:
create two functions. 

the first to parse the highlighted topics in a way so that there is no comma at the end (which would break the url)

The second functions runs after the joke has played and resets the formating done by the first. This is important because often the first function deletes or adds commas to make the url work and if other topics are seclected might create an issue with no comma between words or double commas)

