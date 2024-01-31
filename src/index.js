 let signup = document.querySelector(".signup");
 let login = document.querySelector(".login");

 
// signup.addEventListener("click", () => {
//     slider.classList.add("moveslider");
//     formSection.classList.add("form-section-move");
// });
 
// login.addEventListener("click", () => {
//     slider.classList.remove("moveslider");
//     formSection.classList.remove("form-section-move");
// });

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "" || x == null) {
      alert("Name must be filled out");
      return false;
    }
  }

  function myFunction() {
    alert("Congrats on becoming a member!");
  }

  function myFunction2() {
    alert("You are now logged in!");
  }