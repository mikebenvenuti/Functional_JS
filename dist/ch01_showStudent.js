/** ch01_showStudent.js on 12/18/2016. ...*/




function showStudent(ssn) {

    console.log(ssn);
    var student = getSSN(ssn);

    if (student !== null) {
        document.querySelector('#SSN').innerHTML = student.firstname + ' '  + student.lastname;
    }
    else {
        throw new Error ('Student not found!');
    }
}

function justme (ssn) {
    return ssn = "111-22-3333";
};


function getSSN(ssn) {

    var data = [
                 {"ssn": "111-22-3333",  "firstname": "Mike",  "lastname" : "Benvenuti" },
                 {"ssn": "111-44-3333",  "firstname": "Tony",  "lastname" : "Benvenuti" },
                 {"ssn": "111-33-3333",  "firstname": "Roxane",  "lastname" : "Benvenuti" },
                 {"ssn": "111-55-3333",  "firstname": "Devin",  "lastname" : "Benvenuti" },
                 {"ssn": "111-66-3333",  "firstname": "Brendan",  "lastname" : "Benvenuti" }
               ];



    console.log(data);


    var people = [{ name: 'Frank', age: 30 }, { name: 'Susan', age: 10 }, { name: 'Bill', age: 22 }, { name: 'Carol', age: 52 }, { name: 'Stephanie', age: 22 }, { name: 'Kyle', age: 68 }, { name: 'Hank', age: 22 }];

    var result2 = _(data).take(5).sortBy('firstname').value();
    
    console.log('---------------------')
    console.log(result2);
    console.log('---------------------')


     //var yyy =  _.filter(data, {ssn: "111-22-3333"});
    //var result =  _.first(data,2);
     var result =  _(data).take(2).value();


    console.log(result);
    console.log( '----');
    for (var i=0 ; i < data.length ; i++) {
        if (data[i]["ssn"] == ssn) {
            console.log(data[i]);

            return data[i];
        }
    }


}
