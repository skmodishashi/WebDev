console.log("heloo")

// let hello = document.getElementsByClassName("box")
// console.log(hello)

// hello[2].style.backgroundColor = "red"

// document.getElementById("red").style.backgroundColor = "green"

// document.querySelector(".box").style.backgroundColor = "red"  // for 1st element selection

document.querySelectorAll(".box").forEach(e=>{ //loop i can also use traditional loop also
    e.style.backgroundColor = "red"
})

document.getElementsByTagName("div")  // gives all element having name div
