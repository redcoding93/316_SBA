
function verifyPassword() {  
    var pw = document.getElementById("pswd").value;  
    //check empty password field  
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
       return false;  
    }  
    
  //maximum length of password validation  
    if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } else {  
       alert("Password is correct");  
    }  
  }    


//Username validation
// function validateForm() {
//     var x = document.forms["myForm"]["fname"].value;
//     if (x == "" || x == null) {
//       alert("Name must be filled out");
//       return false;
//     }
//   }

  //BOM alert when submitting account creation
  let email = document.querySelector(".email");
  function myFunction() {
    alert("Congrats on becoming a member!");
  }


//BOM alert after login form submit
  function myFunction2() {
    alert("You are now logged in!");
  }

//Iterate over a collection of elements to accomplish some task.
const inputs = document.getElementsByTagName("input");

for (let input of inputs) {
  console.log(input);
}

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