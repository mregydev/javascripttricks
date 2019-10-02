var student = {
    name: "ahmed",
    printName: function () {

        //will ouput student
        //this inside arrow callback function refer to this used inside printName function
        setTimeout(() => {
            console.log(this.name)
        }, 2000)


        //will ouput undefined
        //this inside normal callback function refernce this that is used by the caller for this function
        setTimeout(function () {
            console.log(this.name)
        }, 2000)
    }
}


student.printName()