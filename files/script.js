let ham = document.getElementsByClassName("ham")[0];
let cross = document.getElementsByClassName("cross")[0];
let navbar = document.getElementsByClassName("nav-item")[0];
ham.addEventListener("click", () => {
  navbar.classList.toggle("navItem-come");
});
cross.addEventListener("click", () => {
  navbar.classList.toggle("navItem-come");
});



// single page js

let myImg = document.querySelectorAll(".myImg")[0];

myImg.addEventListener("click", () => {
  window.location = "http://127.0.0.1:5500/files/singleshirt.html";
});

//  form validation
let uname = document.getElementById("name");
let Email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let submitbtn = document.getElementById("formsubmitbtn");




function formsubmitbtn(){

  // alert(
  //   ` Your Name is ${fullvalue[0]} , your Email is ${fullvalue[1]} , Your subject is ${fullvalue[2]} & you message ${fullvalue[3]}  `
  // );
  // const fullvalue = [uname.value, Email.value , subject.value, message.value]
  
  alert(
    ` Your Name is ${fullvalue.unameValue} , your Email is ${fullvalue.emailValue} , Your subject is ${fullvalue.subjectValue} & you message ${fullvalue.messageValue}  `
  );
  const fullvalue = {
  unameValue: uname.value,
  emailValue: Email.value,
  subjectValue: subject.value,
  messageValue: message.value
};



}
