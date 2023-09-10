//output element

const outputYear = document.querySelector(".output-year")
const outputMonth = document.querySelector(".output-month")
const outputDay = document.querySelector(".output-day")
const submitButton = document.querySelector(".submit-btn")

//input element
let isValid = false;
const inputYear = document.querySelector("#year")
const inputMonth = document.querySelector("#month")
const inputDay = document.querySelector("#day")

//error elements

const errorYear = document.querySelector(".error-year");
const errorMonth = document.querySelector(".error-month");
const errorDay = document.querySelector(".error-day")

//submit button
submitButton.addEventListener('click',CalculateDate)

inputDay.addEventListener("input", (e)=> {
    if(+inputDay.value > 31) {  //+ to convert it into numeric type
        errorDay.textContent = "Must enter a valid date";
        isValid = false;
        return;
    }
    else{
        isValid = true;
        errorDay.textContent = "";
    }
    if(+inputDay.value === 0 || +inputDay.value == "" ) {
        errorDay.textContent = "This Field Is Required";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorDay.textContent = "";
    }
});


inputMonth.addEventListener("input", (e)=> {
    if(+inputMonth.value > 12) {
        errorMonth.textContent = "Must enter a valid month";
        isValid = false;
        return;
    }
    else{
        isValid = true;
        errorMonth.textContent = "";
    }
    if(+inputMonth.value === 0 || +inputMonth.value == "" ) {
        errorMonth.textContent = "This Field Is Required";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorMonth.textContent = "";
    }
});

inputYear.addEventListener("input", (e)=> {
    if(+inputYear.value > 2023) {
        errorYear.textContent = "Must enter a valid year";
        isValid = false;
        return;
    }
    else{
        isValid = true;
        errorYear.textContent = "";
    }
    if(+inputYear.value === 0 || +inputYear.value == "" ) {
        errorYear.textContent = "This Field Is Required";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorMonth.textContent = "";
    }
});

function CalculateDate(){
    if(isValid){
        let birthDay = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        console.log(birthDay);
        let birthobj = new Date(birthDay);
        let ageDiff = Date.now() - birthobj.getTime()
        let ageDate = new Date(ageDiff);
        let ageYears = ageDate.getUTCFullYear()-1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDate()-1;
        outputDay.textContent = ageDay;
        outputMonth.textContent= ageMonth;
        outputYear.textContent = ageYears

    }
    else{
        alert("error");
    }
}