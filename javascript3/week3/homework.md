<table><tr><td>⚠️ You do not need to complete these homeworks. We are currently trialling alternative homeworks for JS2 and JS3. More info <a href="https://github.com/HackYourFuture-CPH/js-projects">here.</a></td></tr></table>

# Homework

## Start the homework

Need to brush up on the homework setup process? Check [this](https://github.com/HackYourFuture-CPH/Git/blob/main/homework_hand_in.md) out before you get into some git confusion!

For this weeks homework we will create a web applications that generates a screenshot of a website based on a url. We will combine two API's one to generate the screenshot and one to allow the user to save the screenshot.

API to generate screenshot: https://rapidapi.com/apishub/api/website-screenshot6/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel

API to save screenshot: https://crudcrud.com/

Technical spesifications.
1. User can enter a URL for a website and it will send back a screenshot of the website using the website-screenshot API
2. User can hit a button to save the screenshot. It will then save the screenshot and the URL as a resource on crudcrud
3. User can get a list of all screenshots he has saved
4. User can delete a screenshot he has saved

Extra
1. Create another resource called users which takes in an email and password. Create one user.
2. Get back a list of users
3. First show a login form
4. If the email and password matches the one user we created we show the applications else we show an error message.

Extra Extra
1. Create another user
2. When saving a screenshot also save the user email(or another unique identifer)
3. Make sure we are only showing screenshots that the user that is logged in has uploaded

Keep in mind the API key for the website-screenshot and the uuid for crudcrud should be in a secret.js file which is not comitted to git
