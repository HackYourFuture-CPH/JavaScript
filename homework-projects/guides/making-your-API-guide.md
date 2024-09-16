# Build your own API

[GitHub Pages](https://pages.github.com/) is a good place to host a site for your portfolio or a project, but another excellent use for it is to host your own JSON API data!

All you would need to do, in short, is create a GitHub Pages repository, put a JSON file in there, and your custom URL will have all of that data from the JSON file. See below for more detailed instructions and some screenshots to help you get around!

## Instructions

### Creating the repository

The first thing you’ll need to do is create a GitHub Pages repository.

Head on over to your GitHub account and create a repository called *`username`*.github.io, where *`username`* is your GitHub username.

If you already have such a repository, just go on to the next step.

![Create the repo](/assets/API-guide-1.png)

❗Make sure that it matches your username or it won’t work!

❗It seems like the repository can be private if you will just use it for the API, but has to be public if you also want to use it to [create a site](https://pages.github.com/). ([see here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#:~:text=GitHub%20Pages%20is%20available%20in%20public%20repositories%20with%20GitHub%20Free%20and%20GitHub%20Free%20for%20organizations%2C%20and%20in%20public%20and%20private%20repositories%20with%20GitHub%20Pro%2C%20GitHub%20Team%2C%20GitHub%20Enterprise%20Cloud%2C%20and%20GitHub%20Enterprise%20Server.%20For%20more%20information%2C%20see%20%22GitHub%E2%80%99s%20plans.%22) for more information)

### Adding the JSON file

1. Once the repository has been made, head over to your terminal and clone that repository into a directory of your choosing.
2. Once the repository been cloned to your computer, open the project folder in VS Code.
3. Create a folder for your APIs or just create a file in the root of the repository. You might want to organize it into a folder (fx. “data”) if you plan to create more APIs in the future and/or if you plan to also host your site on Github Pages. In the case of your JS project, you would just copy and paste the array of objects that you have been using so far and perhaps add more objects to it, if needed.
4. Once you are ready with your JSON file, add, commit and push the changes to `main` so that you have the file on your repository.
5. Head over to the repo on GitHub and verify that your file is there and that all is good.

![See the JSON file](/assets/API-guide-2.png)

❗Be mindful about your data format. Note wether you should use an object or an array of objects and form your file accordingly.

### Using the API

Now comes the fun part! You can use the JSON file in a FETCH to get and use the data dynamically.

Your URL for FETCH will be the raw content of the JSON file that you added. Head on to the `raw` version of your file:

![Access the raw content](/assets/API-guide-3.png)

Copy the URL and use it for fetching the data.

![Copy the URl](/assets/API-guide-4.png)

Now you have a publicly hosted API! To access this information, all you need to do is make an API call like you normally would (FETCH), parse that data (iterate through an array of objects), and then use the data in whatever way you need for your project!

❗Note that in Vanilla JS (which is what you are learning now), you cannot access the fetched data outside of your fetch function. So you will most probably need to move your whole code from before into the function or call the necessary functions from within the FETCH function, something like this:

```jsx
async function getData() {
  const response = await fetch(
    "https://raw.githubusercontent.com/shpomp/shpomp.github.io/main/test.json?token=<>"
  );
  const myData = await response.json();

  theFunctionThatUsesYourData(myData);
}

const theFunctionThatUsesYourData = (data) => {
  for (const item of data) {
    // your code ....
  }
};

// other code ...
```
