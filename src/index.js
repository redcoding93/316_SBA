


//Click on hello text to see it change
const changeText = document.querySelector("#change-text");
//Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.

changeText.addEventListener("click", function() {
  changeText.innerHTML = "Bye! We can't wait to see you again next time";
});
//Include at least one form and/or input with DOM event-based validation. 
//required the field to be filled out, must be 8 characters; no more than 15 characters; alets for all three if input is invalid
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

   //Cache at least one element using querySelector or querySelectorAll.
  //BOM alert when submitting account creation
  //remove user text before testing validations
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
  if (input.type === "text") {
    input.value = "Enter username";
  }
}

//Create at least one element using createElement.
  const newEl = (s) => document.createElement(s);

  //Cache at least one element using selectElementById.
  const app = document.getElementById("app");
  
  //Use appendChild and/or prepend to add new elements to the DOM.
  const d1 = app.appendChild(newEl("div"));
  
//Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
  d1.textContent = `The Narrative subscriber Login & Registration`;

  //Register at least two different event listeners and create the associated event handler functions.
  document.getElementById("create2").addEventListener("mouseover", mouseOver);
  document.getElementById("create2").addEventListener("mouseout", mouseOut);
  
  function mouseOver() {
    //Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
    document.getElementById("create2").style.color = "#1E88E5";
  }
  
  function mouseOut() {
    document.getElementById("create2").style.color = "black";
  }

  //Use the parent-child-sibling relationship to navigate between elements at least once 
  document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;

//| Modify at least one attribute of an element in response to user interaction. |  | Login title changed with setAttribute |
  function myFunction() {
    document.getElementById("myH1").setAttribute("class", "democlass"); 
  }

    //BOM alert when submitting account creation
  function myFunction() {
    alert("Your account has been created");
  }