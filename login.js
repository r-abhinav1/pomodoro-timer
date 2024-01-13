let textToType = "Welcome to Pomodoro Timer."
// </br>Enter Your Details";
const typingSpeed = 70;
// const typingSpeed = 1;

const typingElement = document.getElementById("typing-effect");
let charIndex = 0;

const form = document.getElementById("main_form");
const continueBtn = document.createElement("button");
continueBtn.innerHTML = "Continue";
const br = document.createElement("br");
const brEle = document.createElement("br");
const div = document.getElementById("form-group");
const validate = document.getElementById("validate");

var enter=false;
let factor=0;
function typeText() {
    if (charIndex < textToType.length - 1) {
        let str = typingElement.innerHTML;
        if (str.length-factor == 0) {
            typingElement.innerHTML += textToType.charAt(charIndex) + "|";
        }
        else {
            typingElement.innerHTML = typingElement.innerHTML.slice(0, -1) + textToType.charAt(charIndex) + "|";
        }

        charIndex++;
        setTimeout(typeText, typingSpeed);
    }
    else if (charIndex == textToType.length-1) {
        console.log("Entered");
        typingElement.innerHTML = typingElement.innerHTML.slice(0, -1) + textToType.charAt(charIndex);

        charIndex++;
        setTimeout(typeText, typingSpeed);
    }
    else if((charIndex>=textToType.length) && (enter==false)){
        enter=true;
        console.log(typingElement.textContent.length,"h1");
        typingElement.innerHTML+="<br><br>";
        textToType="Enter Your Details. ";
        charIndex=0;
        factor=typingElement.textContent.length+8;
        console.log(factor,"h2");
        setTimeout(typeText, typingSpeed);
    }
    else {
        const label1 = document.createElement("label");
        label1.for = "name";
        label1.innerHTML = "Enter your name";
        const namein = document.createElement("input");
        namein.type = "text";
        namein.placeholder = "Name";
        namein.name = "name";
        // namein.required;
        form.appendChild(label1);
        form.appendChild(br);
        form.appendChild(namein);
        form.appendChild(brEle);
        div.appendChild(continueBtn);
    }

}

window.onload = typeText;

var num = 1;
var correct = true;
var match = true;
continueBtn.addEventListener("click", function () {
    if (num == 1) {
        var nam = document.myform.name.value;
        // document.getElementById("welcome-name").innerHTML = nam + "!";
        
            if (!/^[a-zA-Z\s]+$/.test(nam)) {
                correct = false;
            }
        

        if (nam.length == 0) {
            match = false;
        }
    }

    else if (num == 2) {
        let pnum = document.myform.pnum.value;
        console.log(pnum);
        if (isNaN(pnum)) {
            correct = false;
        }
        if (pnum.length != 10) {
            match = false;
        }
    }

    if (correct && match) {
        const label1 = document.createElement("label");
        let br1 = document.createElement("br");
        let br2 = document.createElement("br");
        label1.for = "name";
        label1.innerHTML = "Enter your name";


        const label2 = document.createElement("label");
        label2.for = "pnum";
        label2.innerHTML = "Enter your Phone Number";
        const phonein = document.createElement("input");
        phonein.type = "text";
        phonein.placeholder = "Phone Number";
        phonein.name = "pnum";

        const label3 = document.createElement("label");
        label3.for = "email";
        label3.innerHTML = "Enter your email";
        const mailin = document.createElement("input");
        mailin.type = "email";
        mailin.placeholder = "Email";

        const sub = document.createElement("input");
        sub.type = "submit";
        sub.value = "Enter";
        sub.id="submit";
        if (num == 1) {
            form.appendChild(label2);
            form.appendChild(br1);
            form.appendChild(phonein);
            form.appendChild(br2);

            num++;
        }
        else if (num == 2) {
            form.appendChild(label3);
            form.appendChild(br1);
            form.appendChild(mailin);
            form.appendChild(br2);
            form.appendChild(sub);
            div.removeChild(continueBtn);

            num++;
        }
        // form.insertBefore(newFormGroup, continueBtn);
    }
    else {
        if (num == 1) {
            if (correct == false) {
                window.alert("Name can only have alphabets");
                correct = true;
            }
            if (match == false) {
                window.alert("Name cannot be blank");
                match = true;
            }
        }

        else if (num == 2) {
            if (correct == false) {
                window.alert("Phone Number can only have numbers");
                correct = true;
                match = true;
            }
            else if (match == false) {
                window.alert("Phone Number should have 10 digits");
                correct = true;
                match = true;
            }

        }
    }
});