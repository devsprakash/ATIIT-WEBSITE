
// // Get the modal
// const modal = document.getElementById("brochureModal");
// // Get the button that opens the modal
// const btn = document.getElementById("openModalBtn");
// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

/*==============================Get Brochure modal js ===========================*/



function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

document.querySelectorAll('.get-brochure').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        openModal('brochureModal');
    });
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal('brochureModal');
    }
};



/*=============================fillter pop js=======================*/


    // Get the modal
    const filterPopup = document.getElementById("filterPopup");
    
    // Get the button that opens the modal
    const filterBtn = document.querySelector(".courses-controls .filter");
    
    // Get the <span> element that closes the modal
    const filltercloseBtn = document.getElementById("closeBtn");

    // When the user clicks on the button, open the modal
    filterBtn.onclick = function() {
        filterPopup.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    filltercloseBtn.onclick = function() {
        filterPopup.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == filterPopup) {
            filterPopup.style.display = "none";
        }
    }





