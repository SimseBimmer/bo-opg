// write cool JS hwere!!
// #region gallery
let smallImageOne = document.getElementById('imgOne')
let smallImageTwo = document.getElementById('imgTwo')
let smallImageThree = document.getElementById('imgThree')
let smallImageFour = document.getElementById('imgFour')





smallImageOne.addEventListener('click', function (event) {

    let bigImageUrl = mainImage.src
    let smallImageUrl = smallImageOne.src


    mainImage.src = smallImageUrl
    smallImageOne.src = bigImageUrl

})


smallImageTwo.addEventListener('click', function (event) {

    let bigImageUrl = mainImage.src
    let smallImageUrl = smallImageTwo.src


    mainImage.src = smallImageUrl
    smallImageTwo.src = bigImageUrl

})

smallImageThree.addEventListener('click', function (event) {

    let bigImageUrl = mainImage.src
    let smallImageUrl = smallImageThree.src


    mainImage.src = smallImageUrl
    smallImageThree.src = bigImageUrl

})

smallImageFour.addEventListener('click', function (event) {

    let bigImageUrl = mainImage.src
    let smallImageUrl = smallImageFour.src


    mainImage.src = smallImageUrl
    smallImageFour.src = bigImageUrl

})
// #endregion gallery

// #region email reg ex
const form = document.getElementById('formContainer');
const inputs = form.querySelectorAll('input, select');

function validateInput(input) {
    let isValid = false;
    if (input.type === 'text') {
        isValid = /^[a-zA-ZæøåÆØÅ]+$/.test(input.value);
    } else if (input.type === 'email') {
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
    } else if (input.type === 'number') {
        isValid = /^[1-9][0-9]*$/.test(input.value);
    } else if (input.tagName.toLowerCase() === 'select') {
        isValid = input.value !== '';
    }
    return isValid;
}

function handleValidation(event) {
    const input = event.target;
    if (validateInput(input)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}

inputs.forEach(input => {
    input.addEventListener('input', handleValidation);
});

form.addEventListener('submit', (event) => {
    let formIsValid = true;
    inputs.forEach(input => {
        if (!validateInput(input)) {
            input.classList.add('invalid');
            formIsValid = false;

        }
    });

    if (!formIsValid) {
        event.preventDefault();
        document.getElementById('response').textContent = 'Vær venlig at rette de fejlmarkerede felter.';
    } else {
        document.getElementById('response').textContent = 'Formularen blev sendt succesfuldt!';
    }
});
// #endregion email reg ex

// #region cookies popUp
document.addEventListener('DOMContentLoaded', function() {
    const cookiePolicy = document.getElementById('cookie-policy');
    const acceptButton = document.getElementById('accept-cookies');
    const form = document.getElementById('cookie-form');

    // Animate cookie policy in on page load
    setTimeout(() => {
        cookiePolicy.classList.add('show');
    }, 500); // Delay to ensure load event completes

    // Event listener for button to animate cookie policy out
    acceptButton.addEventListener('click', () => {
        cookiePolicy.classList.remove('show');

        // Collect and log the settings
        const formData = new FormData(form);
        const selectedCookies = [];
        formData.forEach((value, key) => {
            selectedCookies.push(value);
        });
        console.log('Cookie preferences:', selectedCookies);
    });
});
// #endregion cookies popUp
