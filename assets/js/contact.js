const button = document.querySelector(".burger_button");
const menu = document.querySelector(".burger_menu");
const closeButton = document.querySelector(".burger_menu_x");

const myFunction = () => {
    menu.classList.toggle("burger_menu_hidden");
}

button.addEventListener("click", myFunction);
closeButton.addEventListener("click", myFunction);

const email = document.getElementById('email');
const title = document.getElementById('title');
const message = document.getElementById('message');
const emailContainer = document.getElementById('email-container');
const titleContainer = document.getElementById('title-container');
const messageContainer = document.getElementById('message-container');
const form = document.getElementById('form');

const elements = [[email, emailContainer], [title, titleContainer], [message, messageContainer]];

form.addEventListener('submit', (e) => {
    let hasErrors = false;

    
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value == '' || email.value == null || !emailRegex.test(email.value.trim())) {
        emailContainer.classList.add('not-empty', 'invalid');
        hasErrors = true;
    }

   
    elements.slice(1).forEach(([element, container]) => {
        if (element.value == '' || element.value == null) {
            container.classList.add('not-empty');
            hasErrors = true;
        }
    });

    if (hasErrors) {
        e.preventDefault();
        return false;
    } else {
        console.log('Form submitted successfully');
        return true;
    }
});

elements.forEach((elements) => {
    elements[0].addEventListener('focus', () => {
        if (elements[1].classList.contains('not-empty')) elements[1].classList.remove('not-empty');
    });

    elements[0].addEventListener('blur', () => {
        if (elements[0].value == '' || elements[0].value == null) {
            if (!(elements[1].classList.contains('not-empty'))) elements[1].classList.add('not-empty');
        }
    });
});

email.addEventListener('blur', () => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.value != '' || email.value != null) {
        if (emailRegex.test(email.value.trim())) {
            emailContainer.classList.remove('invalid');
        } else {
            emailContainer.classList.add('invalid');
        }
    }
});

title.addEventListener('blur', () => {
    if (title.value == '' || title.value == null) {
        titleContainer.classList.add('not-empty');
    }
});

title.addEventListener('focus', () => {
    if (titleContainer.classList.contains('not-empty')) titleContainer.classList.remove('not-empty');
});