const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("navlist");
const switchElement = document.querySelector(".switch");
const clickedSwitch = document.querySelector(".clicked");
const unClickedSwitch = document.querySelector(".unclicked");
const cssSheet = document.getElementById("css");
const logo = document.querySelector(".logo");
const socialicon = document.getElementById("socialicon");
const socialiconTwo = document.getElementById("socialicontwo");
const socialiconThree = document.getElementById("socialiconthree");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");
const cvBtn = document.querySelector(".cv-button")
const modalBg = document.querySelector(".modal-bg")
const socials = document.querySelector(".socials")
const modalClose = document.querySelector(".modal-close")

//swap white logos on website in darkmode
function swapLogo() {
  if (document.body.classList.contains("dark")) {
    logo.setAttribute("src", "src/images/logo3.png");
    socialicon.setAttribute("fill", "rgb(250, 249, 246)");
    socialiconTwo.setAttribute("fill", "rgb(250, 249, 246)");
    socialiconThree.setAttribute("fill", "rgb(250, 249, 246)");
  } else {
    logo.setAttribute("src", "src/images/logo4.png");
    socialicon.setAttribute("fill", "black");
    socialiconTwo.setAttribute("fill", "black");
    socialiconThree.setAttribute("fill", "black");
  }
}

function toggleButton() {
  navList.classList.toggle("show");
}

function toggleDark() {
  document.body.classList.toggle("dark");
  swapLogo();
}

hamburgerButton.addEventListener("click", toggleButton);
switchElement.addEventListener("click", toggleDark);

// fancy scroll animation

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

//Add CV Reveal

cvBtn.addEventListener('click', function(){
  modalBg.classList.add("bg-active")
  socials.classList.add("displayNone")
})

//Remove CV 

modalClose.addEventListener('click', function(){
  modalBg.classList.remove("bg-active")
  socials.classList.remove("displayNone")
})

//get data in form

//validate data in form

function validateForm() {

    clearMessages();
    let errorFlag = false

  if (nameInput.value.length < 1) {

    errorNodes[0].innerText = "Please enter a name";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if(!emailIsValid(email.value)){
    errorNodes[1].innerText = "Invalid email ";
    email.classList.add("error-border");
    errorFlag = true;
  }

  if(message.value.length <1) {
    errorNodes[2].innerText = "Please enter a message";
    message.classList.add("error-border");
    errorFlag = true;
  }

  if(!errorFlag) {
      success.innerText = "Success"
  }
}

//Clear error / success messages

function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
    success.innerText = "";
   
  }
  nameInput.classList.remove("error-border")
  email.classList.remove("error-border")
  message.classList.remove("error-border")
}

//Check if email is valid

function emailIsValid(email)
 {
     let pattern = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
     return pattern.test(email)
 }