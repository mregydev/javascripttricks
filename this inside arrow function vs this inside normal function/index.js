/****Role****/

// this keyword used in arrow function refers to the same this used in the place where it was delclared

// this keyword used in normal function refers to the same this used in the place where it was called

/********/

function student() {
    this.name = "ahemd"

    this.getName = function () {
        return this.name
    }
}

function school() {
    this.name = "redwan"

    this.student = new student()

    let getNameFunc = this.student.getName

    console.log(getNameFunc())
}

school()
