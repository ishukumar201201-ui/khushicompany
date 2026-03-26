const modal = document.getElementById("welcomeModal");
const btn = document.getElementById("exploreBtn");
const closeX = document.querySelector(".close-btn");
const modalBtn = document.getElementById("modalClose");

// Jab Explore button par click ho
btn.onclick = function() {
    modal.style.display = "block";
}

// Jab X par click ho
closeX.onclick = function() {
    modal.style.display = "none";
}

// Jab Start Shopping par click ho (Smooth Scroll)
modalBtn.onclick = function() {
    modal.style.display = "none";
    document.querySelector('.products-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Modal ke bahar click karne par bhi band ho jaye
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}