const class07Students = []
/*
 below is the function to insert student names in the class07 array
*/
function addStudentToClass (studentName) {
  // check for empty string (with whitespace)
  if (studentName.trim() === '') {
    console.log('studentName cannot be empty string')
    return
  }

  const isQueen = studentName.toLowerCase() === 'queen'
  const alreadyHasQueen = class07Students.includes(studentName)

  // Always add the queen
  if (isQueen && !alreadyHasQueen) {
    class07Students.push(studentName)
    return
  }

  if (class07Students.length >= 6) {
    console.log('Cannot add more students to class 07')
    return
  }

  for (var i = 0; i < class07Students.length; i++) {
    var currentStudent = class07Students[i]
    if (currentStudent.toLowerCase() === studentName.toLowerCase()) {
      console.log('Student ' + studentName + ' is already in the class')
      return
    }
  }

  class07Students.push(studentName)
}

addStudentToClass('Queen')
console.log(class07Students)

