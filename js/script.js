// WhatsApp Messaging Function
function whatsappFunc() {
    let num = document.getElementById("number").value.trim();
    let errorElement = document.getElementById("error");
    if (num === "") {
        errorElement.textContent = "Enter a valid number!";
    } else {
        errorElement.textContent = ""; // Clear the error message
        window.open("https://api.whatsapp.com/send?phone=91" + num);
    }
}

window.addEventListener("DOMContentLoaded", function() {
    var modalCloseButton = document.querySelector(".modal-footer button[data-bs-dismiss='modal']");
    var errorElement = document.getElementById("error");

    modalCloseButton.addEventListener("click", function() {
        errorElement.textContent = ""; // Clear the error message when the modal is closed
    });

    window.addEventListener("beforeunload", function() {
        errorElement.textContent = ""; // Clear the error message when the page is refreshed
    });
});


// Percentage Calculating Function
function percentageFunc() {
    const startDateStr = '2023-05-19';
    const numDays = 90;
    const timezoneName = 'Asia/Kolkata';

    const startDate = moment.tz(startDateStr, timezoneName);
    const today = moment.tz(new Date(), timezoneName);

    const elapsedDays = Math.floor(today.diff(startDate, 'days'));
    const percentage = (elapsedDays / numDays) * 100;

    var out = `Wow...you have completed ${percentage.toFixed(2)}% of your challenge.`;
    var cardText = document.getElementById("cardText");
    cardText.innerHTML = out;
}

window.addEventListener('DOMContentLoaded', percentageFunc);


