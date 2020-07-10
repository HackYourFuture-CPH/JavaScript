console.log("script loaded");

class Comment {
  constructor(commentText, username) {
    this.commentText = commentText;
    this.createdAt = new Date();
    this.username = username;
  }

  hasSwearWord() {
    // 1. define an array of swearwords
    // 2. go through all the swearwords and check if any of them is in the comment text
    // 3 if they are return true in not return false
    const swearWords = ["shit", "fuck"];

    const hasSwearWord = swearWords.find(
      (swearWord) => this.commentText.indexOf(swearWord) !== -1
    );

    return Boolean(hasSwearWord);
  }
}

const comment = new Comment("this is the first comment", "helloUser");
console.log(comment.hasSwearWord());

// console.log(comment.createdAt);
// console.log(comment.username);

const comment2 = new Comment("this is the second comment", "samTheSky");

// console.log(comment2);
console.log(comment2.hasSwearWord());

class Post {
  constructor(content) {
    this.content = content;
    this.comments = [];
    this.numberOfLikes = 0;
  }

  addLike() {
    this.numberOfLikes += 1;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  logComments() {
    console.log(this.comments);
  }
}

const firstPost = new Post("jasd askjdnaks dkn sjadbkjs");
console.log(firstPost);
console.log(firstPost.numberOfLikes);
firstPost.addLike();
console.log(firstPost.numberOfLikes);
firstPost.addLike();
console.log(firstPost.numberOfLikes);

firstPost.addComment(comment2);
firstPost.logComments();
