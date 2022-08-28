submitButton = document.getElementById("submit")
continueButton = document.getElementById("continue")
nameInput = document.getElementById("input-name")
numberInput = document.getElementById("input-number")
monthInput = document.getElementById("input-month")
yearInput = document.getElementById("input-year")
cvcInput = document.getElementById("input-cvc")

nameInput.addEventListener("blur", checkName)
numberInput.addEventListener("blur", checkNumber)
monthInput.addEventListener("blur", checkMonth)
yearInput.addEventListener("blur", checkYear)
cvcInput.addEventListener("blur", checkCvc)
submitButton.addEventListener("click", submit)
continueButton.addEventListener("click", reset)

function submit() {
    document.getElementById("form-main").style.display = "none"
    document.getElementById("thank-you").style.display = null
}

function reset() {
    document.getElementById("thank-you").style.display = "none"
    document.getElementById("form-main").style.display = null
}

function checkNumber() {
    numberInput.classList.add("selected")
    isValid = validateNumber()
    if (isValid) {updateNumberDisplay(numberInput.value)}
}

function checkName() {
    nameInput.classList.add("selected")
    isValid = validateName()
    if (isValid) {updateNameDisplay(nameInput.value)}
}

function checkMonth() {
    monthInput.classList.add("selected")
    isValid = validateMonth()
    if (isValid) {updateMonthDisplay(monthInput.value)}
}

function checkYear() {
    yearInput.classList.add("selected")
    isValid = validateYear()
    if (isValid) {updateYearDisplay(yearInput.value)}
}

function checkCvc() {
    cvcInput.classList.add("selected")
    isValid = validateCvc()
    if (isValid) {updateCvcDisplay(cvcInput.value)}
}

function updateNumberDisplay (number) {
    s = String(number).padStart(16, 0)
    output = s.match(/.{1,4}/g).join(' ')
    document.querySelector("#card-front h1").innerHTML = output
}

function updateNameDisplay (name) {
    document.querySelector("#card-front-name").innerHTML = name
}

function updateMonthDisplay (number) {
    month = String(number).padStart(2, 0)
    date = document.querySelector("#card-front-date").innerHTML
    newDate = `${month}${date.slice(2)}`
    document.querySelector("#card-front-date").innerHTML = `${newDate}`
}

function updateYearDisplay (number) {
    year = String(number).padStart(2, 0)
    date = document.querySelector("#card-front-date").innerHTML
    newDate = `${date.slice(0, 3)}${year}`
    document.querySelector("#card-front-date").innerHTML = `${newDate}`
}

function updateCvcDisplay (number) {
    cvcStr = String(number).padStart(3, 0)
    document.querySelector("#card-rear-cvc").innerHTML = cvcStr
}

function validateNumber() {
    labels = Array.from(numberInput.labels)
    label = labels.filter(l => l.classList.contains("warning-invalid"))[0]
    if (numberInput.validity.valueMissing) {
        label.innerHTML = "Can't be blank"
    } else if (numberInput.validity.badInput) {
        label.innerHTML = "Wrong format, numbers only"
    } else if (
        numberInput.validity.rangeOverflow
        || numberInput.validity.rangeUnderflow
    ) {
        label.innerHTML = "Number must be a 16-digit card number"
    } else {
        label.innerHTML = ""
        return true;
    }
    return false;
}

function validateName() {
    labels = Array.from(nameInput.labels)
    label = labels.filter(l => l.classList.contains("warning-invalid"))[0]
    if (nameInput.value == "") {
        label.innerHTML = "Can't be blank"
    } else {
        label.innerHTML = ""
        return true
    }
    return false
}

function validateMonth() {
    labels = Array.from(monthInput.labels)
    label = labels.filter(l => l.classList.contains("warning-invalid"))[0]
    if (monthInput.validity.valueMissing) {
        label.innerHTML = "Can't be blank"
    } else if (
        monthInput.validity.badInput
        || monthInput.validity.rangeOverflow
        || monthInput.validity.rangeUnderflow
    ) {
        label.innerHTML = "Choose 1-12"
    } else {
        label.innerHTML = ""
        return true
    }
    return false
}

function validateYear() {
    labels = Array.from(yearInput.labels)
    label = labels.filter(l => l.classList.contains("warning-invalid"))[0]
    if (yearInput.validity.valueMissing) {
        label.innerHTML = "Can't be blank"
    } else if (
        yearInput.validity.badInput
        || yearInput.validity.rangeOverflow
        || yearInput.validity.rangeUnderflow
    ) {
        label.innerHTML = "Choose 1-12"
    } else {
        label.innerHTML = ""
        return true
    }
    return false
}

function validateCvc() {
    labels = Array.from(cvcInput.labels)
    label = labels.filter(l => l.classList.contains("warning-invalid"))[0]
    if (cvcInput.validity.valueMissing) {
        label.innerHTML = "Can't be blank"
    } else if (
        cvcInput.validity.badInput
        || cvcInput.validity.rangeOverflow
        || cvcInput.validity.rangeUnderflow
    ) {
        label.innerHTML = "Choose a 3-digit CVC"
    } else {
        label.innerHTML = ""
        return true
    }
    return false
}
