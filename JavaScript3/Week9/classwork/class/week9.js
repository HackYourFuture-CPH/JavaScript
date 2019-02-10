// Create a facebook post class

const user = {
    firstname: 'asd',
    lastname: 'asd',
    getFullname() {

    }
}


class Human {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

let adil = new Human('adil');
console.log(adil);
console.log(adil.getName());

let benjamin = new Human('benjamin');
benjamin.getName();

class Comment {
    constructor(username, content, time) {
        this.username = username;
        this.content = content;
        this.time = time;
    }
}

const comment1 = new Comment('test', 'post', '14:19');


// data
// username, content, postTime, likes, comments, shares

// functionality
// addLike, addComment, doShare, save

class Post {
    // setup
    constructor(username, content, postTime, likes, comments, shares) {
        this.username = username;
        this.content = content;
        this.postTime = postTime;
        this.likes = likes;
        this.comments = comments;
        this.shares = shares;
    }

    addLike(username, time) {
        const like = {
            username: username,
            time: time
        };

        this.likes.push(like);
    }

    addComment(username, content, time) {
        this.comments.push(new Comment(username, content, time));
    }

    doShare() {

    }

    save() {

    }

    logThis() {
        console.log(this.username);
    }
}

const post1 = new Post('benna100', 'asd', '10/02/1019', [], [], []);
const post2 = new Post('habsdhjd', 'asdajhdb', '10/02/1019', [], [], []);

post1.addLike('bennaasdasd', '14:07');
console.log(post1.likes);

post1.addComment('ugg', 'Great post', '14:16');
console.log(post1.comments);

post1.logThis();
post2.logThis();


