// Get elements
const email = document.getElementById("email");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const message = document.getElementById("message");
const consent  = document.getElementById("agreement");

// General name validation function
function checkName(input, selector) {
    const regex = /^[a-zA-Z'-]{1,49}$/;
    const value = input.value;
    const isValid = regex.test(value);
    const divName = document.querySelectorAll(selector);

    // Remove existing error messages
    divName.forEach(div => {
        const oldError = div.querySelector(".error-messageName");
        if (oldError) {
            oldError.remove();
        }
    });

    // Call validation handler
    validCheck(isValid, input, divName);
}

// Helper to show/hide error and set border
function validCheck(isValid, input, divs) {
    if (!isValid) {
        input.style.borderColor = "red";

        const p = document.createElement("p");
        p.innerHTML = "Please enter a valid input";
        p.style.color = "red";
        p.classList.add("error-messageName");

        divs.forEach(div => {
            div.appendChild(p.cloneNode(true));
        });
    } else {
        input.style.borderColor = "green";
    }
}

// Email validation
function checkEmail() {
    const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const value = email.value;
    const isValid = regex.test(value);
    const divEmail = document.querySelectorAll(".email");

    // Remove old messages
    divEmail.forEach(div => {
        const oldError = div.querySelector(".error-message");
        if (oldError) {
            oldError.remove();
        }
    });

    if (!isValid) {
        email.style.borderColor = "red";

        const p = document.createElement("p");
        p.innerHTML = "Please enter a valid email address";
        p.style.color = "red";
        p.classList.add("error-message");

        divEmail.forEach(div => {
            div.appendChild(p.cloneNode(true));
        });
    } else {
        email.style.borderColor = "green";
    }
}

function checkConsent() {
    // Get checkbox element
    const divConsent = document.querySelector(".agreement"); // wrapper div

    // Remove old error message if it exists
    const oldError = divConsent.querySelector(".error-messageConsent");
    if (oldError) {
        oldError.remove();
    }

    // Validation
    if (!consent.checked) {
        const p = document.createElement("p");
        p.innerHTML = "To submit this form, please consent to be contacted";
        p.style.color = "red";
        p.classList.add("error-messageConsent");

        divConsent.appendChild(p);
    }

    console.log("Checked:", consent.checked);
}
// Event listeners using callback with arguments

email.addEventListener("input", checkEmail);
fname.addEventListener("input", () => checkName(fname, ".firstName"));
lname.addEventListener("input", () => checkName(lname, ".lastName"));
message.addEventListener("input", () => checkName(message, ".message"));
consent.addEventListener("input", checkConsent);