const title = "When is enough too little?";

const searchString = "When enough to little?";

console.log(title === searchString)
console.log(title.includes(searchString))

console.log(searchString.split(' '))


// function getSongByTitleFuzzy(title) {
//     const titleSplit = title.split(' ');
//     const mySearch = [];
//     for (let i = 0; i < titleSplit.length; i++) {
//         for (let j = 0; j < songDatabase.length; j++) {
//             const titleDatabase = songDatabase[j].title.toLowerCase();
//             const titleSearched = titleSplit[i].toLowerCase();
//             if (titleDatabase.search(titleSearched) >= 0) {
//                 mySearch.push(songDatabase[j]);
//             }

//         }
//         return mySearch;
//     }
//     return `There is no such song name in the database`;
// }


function fuzzySearch(title, searchTerm){
    return searchTerm.split(" ").every((item) =>{
        return title.includes(item)
    })
}

console.log(fuzzySearch(title, searchString))