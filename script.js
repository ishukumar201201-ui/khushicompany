document.getElementById('exploreBtn').addEventListener('click', function() {
    // Button par click karte hi ek alert popup aayega (Premium style)
    alert('Welcome to Khushi Fashion Store! Redirecting to our elite collection...');
    
    // Smooth scroll to products section
    document.querySelector('.products-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
});