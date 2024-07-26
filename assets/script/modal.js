
// Get the modal
const modal = document.getElementById("brochureModal");

// Get the button that opens the modal
const btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*==================================coming soon page=========================*/

// Set the date we're counting down to
const countDownDate = new Date("Aug 31, 2024 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();
    
    // Calculate the remaining time
    const distance = countDownDate - now;
    
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".coming-soon").innerHTML = "<h1>We're Live!</h1><p>Thank you for your patience. Our website is now live.</p>";
    }
}, 1000);

// Handle form submission
document.getElementById("subscribe-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    alert("Thank you for subscribing! We'll keep you updated.");
    // Here you would normally handle the form submission, e.g., sending data to the server
});














