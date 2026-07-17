console.log("Hello")
document.querySelector(".container").innerText
document.querySelector(".container").innerHTML
document.querySelector(".container").outerHTML

// document.querySelector(".container").innerHTML = "Hey I am good"

// document.designMode = "on" with this i can edit the site

let div = document.createElement("div");
div.innerHTML = "I have been inserted";
div.setAttribute("class","created");
document.querySelector(".container").append(div);  //append hamesha last me hi element add karega

