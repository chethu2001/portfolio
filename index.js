document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
});
window.addEventListener("load", (e) => {
    checkCookie();
});
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    let as = document.cookie.split(";");
    for (let i = 0; i < as.length; i++) {
        let ap = as[i].trim(); // Trim whitespace
        if (ap.indexOf(name + "=") == 0) { // Ensure exact match for the cookie name
            return ap.substring(name.length + 1);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    let a = document.getElementById("name"); // Corrected ID

    if (!a) {
        console.error("Input element with ID 'name' not found.");
        return;
    }

    if (user) { // Check if the cookie exists
        if (confirm(`Welcome again, ${user}! Do you want to update your name?`)) {
            if (a.value.trim() !== "") {
                user = a.value.trim();
                setCookie("username", user, 365);
                alert(`Your name has been updated to ${user}.`);
            } else {
                alert("Please enter a valid name to update.");
            }
        }
    } else if (a.value.trim() !== "") { // Ensure the input is not empty
        user = a.value.trim();
        setCookie("username", user, 365);
        alert(`Welcome, ${user}! Your name has been saved.`);
    } else {
        alert("Please enter your name to save it.");
    }
}


