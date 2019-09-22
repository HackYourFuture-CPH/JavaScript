// Create a simple and easy to use notepad

// Save a note

const notes = [];

function addNote(content, id) {
    if (typeof (content) === 'string' && typeof (id) === 'number' && content && id) {
        notes.push({content, id});
        return true;
    }else{
        return false;
    }
}

//console.log(addNote('my first note', 1));
addNote('my first note', 1);
//console.log(addNote('my second note', 2));
addNote('my second note', 2);
//console.log(addNote('my third very long note', 3));
addNote('my third very long note', 3);
addNote('', 3);
addNote('', '');
addNote('test note', true);



//Get a note

function getNoteFromId(id) {
    if (typeof(id) === 'Number') {
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].noteId === id) {
                return notes[i].noteContent;
            }
        }
    } else {
        return 'Enter a number for id';
    }
}

//getNoteFromId(2);
console.log(getNoteFromId(2));
console.log(getNoteFromId());
console.log(getNoteFromId('2'));


//Get all notes

function getAllNotes() {
    return notes;
}

console.table(getAllNotes());

//Log out notes

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(`The note with id: ${notes[i].noteId}, has the following note text: ${notes[i].noteContent}.`);
    }
}

console.log(logOutNotesFormatted());


//Unique feature
//id should be generated automatically

function addNoteDone(content) {
    if (typeof (content) === 'string' && content) {
            notes.push({
                noteContent: content,
                noteId: notes.length + 1,
        });
    }
}

addNoteDone('my first note without entering ID');
addNoteDone('my second note without entering ID');
addNoteDone('');
addNoteDone(3);

console.table(notes);
