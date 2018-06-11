function getAjaxData(url){
  return new Promise((resolve, reject)=>{
    let req = new XMLHttpRequest();

    req.onload = () => resolve(JSON.parse(req.responseText))
    req.onerror = () => reject(req.status.responseText)

    req.open('GET', url)
    req.send()
  })
}

/*
you could also use the new fetch() API instead of the above:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
*/

// create an empty array to use to join requests later
let users = [];

getAjaxData('https://jsonplaceholder.typicode.com/users')
.then(function main(data){
  users = data;

  const todoRequests = users
  .map(user => {
    // console.log(user);

    let todosURL = `https://jsonplaceholder.typicode.com/users/${user.id}/todos`;
    
    // return todo loading promises
    return getAjaxData(todosURL);  
  });

  // return as single promise so the same catch can handle either error
  return Promise.all(todoRequests); // wait for all promises to resolve
})
.then(function(todos){
  // console.log(todos);

  users.forEach((user, i) => {
    user.todos = todos[i];
  });

  // once everything is finished
  console.log(users);
})
.catch(console.log);
