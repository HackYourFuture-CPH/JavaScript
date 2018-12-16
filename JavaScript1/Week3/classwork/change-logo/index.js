function changeLogo() {
  let logo = document.getElementById('logo');
  logo.src = "https://assets.fontsinuse.com/static/use-media-items/15/14246/full-2048x768/56fc6e1d/Yahoo_Logo.png?resolution=0";

  let newTitle = document.createElement('h1');
  newTitle.innerHTML = 'My new title'; // <h1>My new title</h1>

  document.body.appendChild(newTitle);
}

changeLogo();
