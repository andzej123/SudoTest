const button = document.querySelector(".burger_button");
const menu = document.querySelector(".burger_menu");
const closeButton = document.querySelector(".burger_menu_x");
const circle = document.querySelector(".circle_top");
const burgerCircle = document.querySelector(".circle_burger_menu");

document.body.addEventListener("click", function (event) {
  if (button.contains(event.target)) {
    menu.classList.toggle("burger_menu_hidden");
    return;
  }
  if (closeButton.contains(event.target)) {
    menu.classList.toggle("burger_menu_hidden");
    return;
  }

  if (menu.contains(event.target)) {
    return;
  } else {
    menu.classList.remove("burger_menu_hidden");
  }
});

addEventListener("scroll", () => {
  menu.classList.remove("burger_menu_hidden");
});

// <><><><><><><><><><> Circles <><><>><><><><><><><><><>><><><><><><><> //

function calcCircle() {
  let result = 0;
  if (window.innerWidth <= 768) {
    result = 780 + (window.innerWidth - 375) * 0.43;
  } else {
    result = 949 - (window.innerWidth - 768) * 0.251488;
  }
  return result;
}

function calcLeft() {
  let result = 0;
  if (window.innerWidth <= 768) {
    result = (window.innerWidth - calcCircle()) / 2;
  } else {
    result = -82 + (window.innerWidth - 768) * 1.3095238;
  }
  return result;
}

function calcTop() {
  let result = 0;
  if (window.innerWidth < 768) {
    result = -550 - (window.innerWidth - 375) * 0.2977099;
  } else {
    result = -662 + (window.innerWidth - 768) * 0.7291666666;
  }
  return result;
}

let wi = calcCircle();
let circlePosition = calcLeft();
let circleTop = calcTop();
let burgerLeft =
  (window.innerWidth - wi) / 2 - (window.innerWidth / 100) * 20.2;
let burgerLeftBig = -255 - (window.innerWidth - 625) * 0.70422535;

circle.style.width = `${wi}px`;
circle.style.height = `${wi}px`;
circle.style.borderRadius = `${wi}px`;
circle.style.left = `${circlePosition}px`;
circle.style.top = `${circleTop}px`;
burgerCircle.style.width = `${wi}px`;
burgerCircle.style.height = `${wi}px`;
burgerCircle.style.borderRadius = `${wi}px`;

if (window.innerWidth < 625) {
  burgerCircle.style.left = `${burgerLeft}px`;
} else {
  burgerCircle.style.left = `${burgerLeftBig}px`;
}

window.addEventListener("resize", myFunction);

function myFunction() {
  let wi = calcCircle();
  let circlePosition = calcLeft();
  let circleTop = calcTop();
  let burgerLeft =
    (window.innerWidth - wi) / 2 - (window.innerWidth / 100) * 20.2;

  let burgerLeftBig = -255 - (window.innerWidth - 625) * 0.70422535;

  circle.style.width = `${wi}px`;
  circle.style.height = `${wi}px`;
  circle.style.borderRadius = `${wi}px`;
  circle.style.left = `${circlePosition}px`;
  circle.style.top = `${circleTop}px`;
  burgerCircle.style.width = `${wi}px`;
  burgerCircle.style.height = `${wi}px`;
  burgerCircle.style.borderRadius = `${wi}px`;

  if (window.innerWidth < 625) {
    burgerCircle.style.left = `${burgerLeft}px`;
  } else {
    burgerCircle.style.left = `${burgerLeftBig}px`;
  }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const aboutForm = document.querySelector(".about_form");

// console.log(aboutForm);


const testValid = (element, pattern) => {
  const elem = element;
  let errorMsg = elem.nextElementSibling;
  errorMsg.innerHTML = `Please enter a valid email`;
  setTimeout(function () {
    errorMsg.classList.add("hidden");
  }, 2000);
  if (!pattern.test(elem.value)) {
    errorMsg.classList.remove("hidden");
    throw new Error("klaida");
  } else {
    errorMsg.classList.add("hidden");
    errorMsg.innerHTML = `You just got demo send to ${elem.value}`;
    errorMsg.classList.remove("hidden");
    setTimeout(function () {
      errorMsg.classList.add("hidden");
      elem.value = "";
    }, 2000);
  }
};



aboutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = aboutForm.querySelector("#username");
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  try {
    testValid(userName, pattern);
    console.log("Forma OK");
  } catch (error) {
    console.log(error.message);
  }
});


