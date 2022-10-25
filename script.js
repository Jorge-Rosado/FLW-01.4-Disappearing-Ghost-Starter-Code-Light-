//html element and selector variables
let p = document.createElement("p");
let h1 = document.querySelector(".header");
let input = document.querySelector(".input");
let userInput;

//declare variable for ghost image
let ghostImage = document.querySelector(".ghost-image");


//declare variables for all of the buttons
let hideBtn = document.querySelector(".hide-button");
let showBtn = document.querySelector(".show-button");
let messageBtn = document.querySelector(".message-button");  
let updateBtn = document.querySelector(".update-img-button");
let nameBtn = document.querySelector(".name-button");
  //create an onclick event for the Hide Me button
  hideBtn.onclick = function (){  
    ghostImage.style.display= "none";
};

//create an onclick event for the Show Me button
showBtn.onclick = function (){
  ghostImage.style.display= "initial";
  
};


//create an onclick event for the Update Img button
updateBtn.onclick = function (){
  ghostImage.src = "images/ghost_w_glasses.jpg";
};


//create an onclick event for the Send Message button
messageBtn.onclick = function(){
  //update the userInput variable by saving the value of the input
  let userInput = input.value;
  //use the insertAdjacentHTML method to append the userInput in a <p> tag
  let message = document.querySelector(".message");
  p.innerHTML = userInput;
  message.insertAdjacentHTML("beforeend", p.outerHTML);
};





//create an onclick event for the Name Me button
nameBtn.onclick = function(){
  //update the userInput variable by saving the value of the input
  let userInput = input.value;
//use the innerHTML method to update the h1 tag
  h1.innerHTML = userInput
};
