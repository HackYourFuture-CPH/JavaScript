const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

// Write some code here
// for(let i = 0 ; i < names.length; i++){
//     if(names[i] === nameToRemove){
//        names.splice(i, 1);
// 	}
// }

const idx = names.indexOf(nameToRemove)
names.splice(idx, 1);

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
