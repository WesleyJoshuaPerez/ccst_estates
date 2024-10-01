// Get the button and testimonials section
var infoButton = document.getElementById("testi");
var testimonials = document.getElementById("testimonials");

// Hide the testimonials section initially
testimonials.style.display = "none";

// Add click event listener to the button
infoButton.addEventListener("click", function(){
    // Toggle the visibility of the testimonials section
    if(testimonials.style.display === "none"){
        testimonials.style.display = "block";
    } else {
        testimonials.style.display = "none";
    }
});