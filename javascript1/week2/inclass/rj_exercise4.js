// This function emulates sending emails to receipients
function sendEmailTo(recepient) {
  // But really it only logs out a string
  console.log("email sent to " + recepient);
}

const allEmails =
  "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";
const allEmailsArray = allEmails.split("|");

for (let i = 0; i < allEmailsArray.length; i++) {
  const email = allEmailsArray[i];
  sendEmailTo(email);
}

// for(const email of allEmailsArray) {
//     sendEmailTo(email);
// }

// allEmailsArray.reverse().forEach(sendEmailTo)
