
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

const dropdownMenu = document.querySelector('.dropdown-menu');
const toggleNavbar = document.querySelector('.toggle-navbar');
const dropdownClose = document.querySelector('.dropdown-close');
const navMenu = document.querySelector('.nav-menu');

dropdownMenu.previousElementSibling.addEventListener('click', function () {
	if(window.innerWidth < 576) {
		dropdownMenu.classList.add('show');
		toggleNavbar.classList.add('hide');
	}
})

dropdownClose.addEventListener('click', function () {
	if(window.innerWidth < 576) {
		dropdownMenu.classList.remove('show');
		toggleNavbar.classList.remove('hide');
	}
})


toggleNavbar.addEventListener('click', function () {
	if(window.innerWidth < 576) {
		navMenu.classList.toggle('show');

		if(navMenu.classList.contains('show')) {
			this.classList.replace('bx-menu', 'bx-x');
		} else {
			this.classList.replace('bx-x', 'bx-menu');
		}
	}
})



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

