var x;

//default value for x is undefiend
//will print undefined
console.log(x)


//will execute the if statement cause x value is undefined which is a falsy value
if (!x) {
    console.log('x is undefiend')
}


try {
    //Will throw reference error which is y is not defined
    console.log(y)
}
catch (ex) {
    console.log(ex.message)
}
