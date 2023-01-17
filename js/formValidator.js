function inputValidator() {
    let error = false
    let email = document.getElementById("email");
    if (email.value.length < 1) {
        let errMess = document.getElementById("emailErrorMessage");
        errMess.innerText = "*email is required";
        error = true;
    } else if (email.value.length < 5) {
        let errMess = document.getElementById("emailErrorMessage");
        errMess.innerText = "*please enter a valid email";
        error = true;
    } else {
        let flag = false;
        for (let char of email.value) {
            if (char === "@") {
                flag = true;
            }
        }
        if (!flag) {
            let errMess = document.getElementById("emailErrorMessage");
            errMess.innerText = "*please enter a valid email";
            error = true;
        }
    }
    let comment = document.getElementById("comment");
    if (comment.value.length < 2) {
        let errMess = document.getElementById("commentErrorMessage");
        errMess.innerText = "*Comment is required";
        error = true;
    }
    if (error) {
        return false
    } else {
        return true
    }
}

function submit() {
    if (validateInputs()) {
        alert("Comment has been successfully submitted.")
    }
}