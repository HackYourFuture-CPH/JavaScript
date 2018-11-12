// For closures:
// Exercise 2. Fill in the blank functions using closures
function createClass(students, roomNumber, time) {
    return {
        addStudent(name) {
            students.push(name);
        },
        removeStudent(name) {

        },
        removeAllStudents() {
            
        },
        getStudents() {
            return students;
        },
        getNumberOfStudents() {
            return students.length;
        },
        getTime() {
            return time;
        },
        changeTime() {

        },
        isStudentInClass() {

        },
    }
}

const classSeven = createClass(['badr', 'Omid'], 123, '11-12')
classSeven.addStudent('Amira');