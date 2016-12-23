/** js6example.js on 12/22/2016. */

const add = (a, b) => {
    return a + b;
};

const addit = () => {
    let a = parseInt(document.getElementById("add1").value);
    let b = parseInt(document.getElementById("add2").value);

    let x = add( a , b );
    document.getElementById("answer").innerHTML = x;

}

