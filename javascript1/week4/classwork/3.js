const users = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 104
  }];

  const usersNotOnline = [{
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }]

function whosOnline (friends) {
    const offline = [];
    const online = [];
    const away = [];

  for(let i=0; i < friends.length; i++){
    const friend = friends[i];

    let statusArray;

    if(friend.status === 'offline') {
        // offline.push(friend.username);
        statusArray = offline;
    } else if(friend.status === 'online') {
        if(friend.lastActivity <= 10){
            // online.push(friend.username);
            statusArray = online;
        } else { 
            // away.push(friend.username);
            statusArray = away;
        }
    }

    statusArray.push(friend.username);
  }

  const status =  {
    offline: offline,
    online: online,
    away: away
  };

  return status;
}

const usersStatus = whosOnline(users);
// console.log(usersStatus);

console.log(whosOnline(usersNotOnline));

const name = 'rohit';

const user = {
    username: name,
    status: 'online',
    lastActivity: 22
}

console.log(whosOnline([user]));
