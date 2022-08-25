submitButton = document.getElementById("submit")
continueButton = document.getElementById("continue")

submitButton.addEventListener("click", clickSubmit)
continueButton.addEventListener("click", clickContinue)

function clickSubmit() {
    document.getElementById("form-main").style.display = "none"
    document.getElementById("thank-you").style.display = null
}

function clickContinue() {
    document.getElementById("thank-you").style.display = "none"
    document.getElementById("form-main").style.display = null
}