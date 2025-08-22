// Login System
function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    if(email && pass) {
        document.getElementById("loginOverlay").style.display = "none";
        document.getElementById("mainContent").classList.remove("blurred");
    } else {
        alert("Please fill in all fields!");
    }
}

// Navbar Animation
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Open Trailer
function openTrailer(videoId) {
    document.getElementById("trailerFrame").src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    document.getElementById("trailerPopup").style.display = "flex";
}

// Close Trailer
function closeTrailer() {
    document.getElementById("trailerPopup").style.display = "none";
    document.getElementById("trailerFrame").src = ""; // stops video
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        // Close other open answers
        document.querySelectorAll('.faq-answer.active').forEach(openAnswer => {
            if (openAnswer !== answer) {
                openAnswer.classList.remove('active');
                openAnswer.previousElementSibling.querySelector('.symbol').textContent = '+';
            }
        });

        // Toggle current answer
        answer.classList.toggle('active');

        // Update symbol
        const symbol = question.querySelector('.symbol');
        symbol.textContent = answer.classList.contains('active') ? '×' : '+';
    });
});