// Function to send email
function sendMail() {
    const fullName = document.getElementById("fullName").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value
    const successCheck = document.querySelector('.success');
    const errorCheck = document.querySelector('.error');

    // Basic form validation
    if (!fullName || !email || !subject || !message) {
        errorCheck.innerHTML = '<p class = "text-xl">Please fill in all fields ❌</p>';
        setTimeout(() => {
            errorCheck.innerHTML = '';
        }, 2000);
        return;
    }

    // Simple email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorCheck.innerHTML = '<p class = "text-xl">Please enter a valid email address ❌</p>';
        setTimeout(() => {
            errorCheck.innerHTML = '';
        }, 2000);
        return;
    }

    const params = {
        fullName,
        email,
        message,
        subject
    };
    const serviceId = "service_0a5jpjd";
    const templateId = "template_e5qcrwc";

    emailjs.send(serviceId, templateId, params)
        .then((res) => {
            document.getElementById("fullName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            successCheck.innerHTML = '<p class = "text-xl">Message Sent Successfully ✅</p>';
            setTimeout(() => {
                successCheck.innerHTML = '';
            }, 2000);
        })
        .catch((err) => {
            console.error(err);
            errorCheck.innerHTML = '<p class = "text-xl">Failed to send message ❌</p>';
            setTimeout(() => {
                errorCheck.innerHTML = '';
            }, 2000);
        });
}

// Event listener for form submission
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    sendMail();
});
