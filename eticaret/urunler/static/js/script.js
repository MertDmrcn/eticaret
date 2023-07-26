// Scrool Bar Start
window.addEventListener('scroll', function () {
    var scrollBtn = document.getElementById('scrollBtn');
    if (window.pageYOffset > 200) {
        scrollBtn.classList.add('show-scroll-btn');
    } else {
        scrollBtn.classList.remove('show-scroll-btn');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 
    });
}

// Scrool Bar End
//-----------------------------------------------------------------------------------
//! Login Screen Start
function toggleResetPswd(e) {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e) {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}

$(() => {
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
})

//! Login Screen End


// !Sipariş Ekranı Start

var sipariş = document.getElementById("takipNo")

// !Sipariş Ekranı Js End

function limitInputLength(input, maxLength) {
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}
