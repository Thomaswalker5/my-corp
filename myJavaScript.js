let myName = "Chris"
console.log(myName);
//this function logs a line of text in the browser
console.log("hello world")


/*
 * java script is all objects, console can log stuff
 * let, var, const = final form (no more changes can be made)
 * if non of the three final forms, then the variable can be changed
 */

//function that changes heading

function init() {
    changeHeading();
    greeting();
}

function changeHeading() {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello world!';
}



function greeting() {
    const para = document.createElement("p");
    para.innerText = myName;
    document.body.appendChild(para);
}

function changeButton() {
    const btn = document.createElement("button");
    btn.innerText = "Trial button";
    document.body.appendChild(btn)
}