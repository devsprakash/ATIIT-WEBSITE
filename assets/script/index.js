
function loadHTML(url, containerId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error('Error fetching content:', error));
}

// Load header and footer content
window.onload = function () {
    loadHTML('loader.html', 'loaderContainer');
    loadHTML('navbar.html' , 'navbarContainer')
};


//=================================Navbar========================//


const dropdownMenus = document.querySelectorAll('.nav-menu > li');
const toggleNavbar = document.querySelector('.toggle-navbar');
const dropdownClose = document.querySelector('.dropdown-close');
const navMenu = document.querySelector('.nav-menu');

// Function to close all dropdowns
function closeDropdowns() {
    dropdownMenus.forEach(menu => {
        const dropdownMenu = menu.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.classList.remove('show');
        }
    });
}

// Toggle the mobile nav menu
toggleNavbar.addEventListener('click', function () {
    if (window.innerWidth < 576) {
        navMenu.classList.toggle('show');

        if (navMenu.classList.contains('show')) {
            this.classList.replace('bx-menu', 'bx-x');
        } else {
            this.classList.replace('bx-x', 'bx-menu');
        }
    }
});

// Handle dropdown toggle on click
dropdownMenus.forEach(menu => {
    const dropdownMenu = menu.querySelector('.dropdown-menu');

    if (dropdownMenu) {
        menu.querySelector('a').addEventListener('click', function (e) {
            if (window.innerWidth < 576) {
                e.preventDefault(); // Prevent default link behavior

                // Close any open dropdowns
                closeDropdowns();

                // Toggle the current dropdown menu
                dropdownMenu.classList.toggle('show');

                // Close the nav menu when a dropdown is opened
                if (dropdownMenu.classList.contains('show')) {
                    toggleNavbar.classList.add('hide');
                } else {
                    toggleNavbar.classList.remove('hide');
                }
            }
        });
    }
});

// Handle close button click
dropdownClose.addEventListener('click', function () {
    if (window.innerWidth < 576) {
        closeDropdowns();
        toggleNavbar.classList.remove('hide');
    }
});

// Close dropdowns if clicking outside
document.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        if (!navMenu.contains(e.target) && !toggleNavbar.contains(e.target)) {
            closeDropdowns();
            toggleNavbar.classList.remove('hide');
        }
    }
});


//=================================Loader========================//
     
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const loader = document.getElementById("loading");
        loader.classList.add("hide-loader");
    }, 2000); // 2 seconds delay
});



// .....................logo slider..............................//

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


