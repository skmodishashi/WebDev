let a = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let c = Math.floor(Math.random() * 256);
let d = Math.floor(Math.random() * 256);
let e = Math.floor(Math.random() * 256);
let f = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let h = Math.floor(Math.random() * 256);


document.body.firstElementChild.children[0].style.backgroundColor = `rgb(${a}, ${b}, ${c})`
document.body.firstElementChild.children[1].style.backgroundColor = `rgb(${h}, ${a}, ${c})`
document.body.firstElementChild.children[2].style.backgroundColor = `rgb(${c}, ${a}, ${h})`
document.body.firstElementChild.children[3].style.backgroundColor = `rgb(${d}, ${e}, ${f})`
document.body.firstElementChild.children[4].style.backgroundColor = `rgb(${e}, ${d}, ${f})`



document.body.firstElementChild.children[0].style.color = `rgb(${f}, ${d}, ${e})`
document.body.firstElementChild.children[1].style.color = `rgb(${a}, ${d}, ${e})`
document.body.firstElementChild.children[2].style.color = `rgb(${a}, ${f}, ${e})`
document.body.firstElementChild.children[3].style.color = `rgb(${f}, ${c}, ${e})`
document.body.firstElementChild.children[4].style.color = `rgb(${f}, ${a}, ${e})`
