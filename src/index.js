 let login = document.querySelector(".login");

 
// signup.addEventListener("click", () => {
//     slider.classList.add("moveslider");
//     formSection.classList.add("form-section-move");
// });
 
// login.addEventListener("click", () => {
//     slider.classList.remove("moveslider");
//     formSection.classList.remove("form-section-move");
// });

//Username validation
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "" || x == null) {
      alert("Name must be filled out");
      return false;
    }
  }

  //BOM alert when submitting account creation

  let email = document.querySelector(".email");
  function myFunction() {
    alert("Congrats on becoming a member!");
  }

//   function myFunction() {
//     alert("Congrats on becoming a member!");
//   }

//BOM alert after login form submit

  function myFunction2() {
    alert("You are now logged in!");
  }

  //Password verification
  function checkPassword(form) { 
    password1 = form.password1.value; 
    password2 = form.password2.value; 

    // If password not entered 
    if (password1 == '') 
        alert ("Please enter Password"); 
          
    // If confirm password not entered 
    else if (password2 == '') 
        alert ("Please enter confirm password"); 
          
    // If Not same return False.     
    else if (password1 != password2) { 
        alert ("\nPassword did not match: Please try again...") 
        return false; 
    } 

    // If same return True. 
    else{ 
        alert("Password Match: Welcome to GeeksforGeeks!") 
        return true; 
    } 
} 

//Iterate over a collection of elements to accomplish some task.
const inputs = document.getElementsByTagName("input");

for (let input of inputs) {
  console.log(input);
}

// const body = document.body
// const dive = document.querySelector("#byLine")
footer = document.body.style.backgroundColor = "darkblue"


//body.append("The Narrative subscriber Login & Registration");

//const my_div = document.getElementById("my-div");
//my_div.innerHTML("<h3>hello</h3>");
// You can create a nested structures by
// chaining appendChild() calls together.

// div.innerText = "hello"
 //body.appendChild(div)
//  function myFunction3() {
//     var element = document.getElementsByClassName("container");
//     element.classList.toggle("dark-mode");
//   }

//Create at least one element using createElement.
  const newEl = (s) => document.createElement(s);

  //Cache at least one element using selectElementById.
  const app = document.getElementById("app");
  
  //Use appendChild and/or prepend to add new elements to the DOM.
  const d1 = app.appendChild(newEl("div"));
  
  //Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
  d1.textContent = `The Narrative subscriber Login & Registration`;
  
 

  const cList = document.getElementById("commentList");
  const cInput = document.getElementById("commentInput");
  const cBtn = document.getElementById("addCommentBtn");