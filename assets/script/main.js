
/*============================== registre Api integration =======================*/


registerButton.addEventListener('click', function (event) {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const gender = genderElement ? genderElement.value : '';

    let isValid = validateForm(fullname, email, phone, course, gender);
    if (isValid) {
        registerUser(fullname, email, phone, course, gender);
    }
});

function validateForm(fullname, email, phone, course, gender) {
    let isValid = true;

    // Clear previous errors
    document.getElementById('fullnameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('courseError').textContent = '';
    document.getElementById('genderError').textContent = '';

    // Validate fullname
    if (fullname.trim() === '') {
        document.getElementById('fullnameError').textContent = 'Full Name is required';
        isValid = false;
    }

    // Validate email
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address';
        isValid = false;
    }

    // Validate phone
    if (phone.trim() === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required';
        isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Invalid phone number';
        isValid = false;
    }

    // Validate course
    if (course.trim() === '') {
        document.getElementById('courseError').textContent = 'Course selection is required';
        isValid = false;
    }

    // Validate gender
    if (!gender) {
        document.getElementById('genderError').textContent = 'Gender selection is required';
        isValid = false;
    }

    return isValid;
}

function registerUser(fullname, email, phone, course, gender) {
    fetch('http://3.111.219.214:6001/v1/users/signUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ full_name: fullname, email, phone, course_name: course, gender })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === '1') {
           window.location.href = 'index.html'
        } else if (data.message && data.message.includes('Email already exists')) {
            
        } else {
            document.getElementById('emailError').textContent = 'This email is already registered. Please use a different email.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
    });
}

