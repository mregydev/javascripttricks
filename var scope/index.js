//var scope is to the nearest function

function test() {
    //will print undefined
    console.log(x)

    var x = 2

    //will print 2
    console.log(x)
}

test()

//will throw exception x is not defined
console.log(x)