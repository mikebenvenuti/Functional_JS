/** ch01_showStudent.js on 12/18/2016. ...*/

function showStudent(ssn) {

    console.log(ssn);
    var student = db.get(ssn);

    if (student !== null) {
        document.querySelector('#SSN').innerHTML =
            '${student.firstname}',
            '${student.lastname}';
    }
    else {
        throw new Error ('Student not found!');
    }
}


