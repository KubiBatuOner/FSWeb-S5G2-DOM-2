import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
/* document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
}); */

// Kodlar buraya gelecek!

const body = document.querySelector("body");

// mouseover

const x = document.querySelectorAll(".destination");

x.forEach((destination) => {
  destination.addEventListener("mouseover", (event) => {
    destination.style.padding = "30px 15px";
    destination.style.borderRadius = "25px";
    destination.style.backgroundColor = "#EF5350";
  });
  destination.addEventListener("mouseout", (event) => {
    destination.style.backgroundColor = "unset";
    destination.style.border = "none";
    destination.style.padding = "0";
    destination.style.color = "black";
    destination.style.borderRadius = "0";
  });
});

// keydown

body.addEventListener("keydown", (w) => {
  const newArr = ["#FFAB40", "#7C9EB2", "#52528C"];
  if (w.code == "Enter") {
    function changeColor() {
      return Math.floor(Math.random() * 2);
    }
    body.style.backgroundColor = newArr[changeColor()];
  }
});

// wheel

const y = document.querySelectorAll(".nav-link")[3];

body.addEventListener("wheel", () => {
  y.style.fontSize = "2.2rem";
  y.style.fontWeight = "bold";
  y.style.color = "red";
  y.textContent = "ULAŞIN BİZE!";
});

// load

window.addEventListener("load", () => {
  alert("Sınırlı sayıda olan kontenjan için hemen bizimle iletişime geç!");
  y.style.fontSize = "2rem";
  y.style.color = "#D500F9";
  y.textContent = "ULAŞIN BİZE!";
});

// focus

y.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
  event.target.style.color = "red";
  event.target.style.padding = "5px";
});

// resize

window.addEventListener("resize", () => {
  body.style.backgroundColor = "#C5CAE9";
});

// scroll

const navigate = document.querySelectorAll("h2")[0];

window.addEventListener("scroll", () => {
  navigate.style.backgroundColor = "green";
});

// select

const a = document.querySelector("input");

a.addEventListener("select", (event) => {
  event.target.style.backgroundColor = "#90CAF9";
});

//dblclick

y.addEventListener("dblclick", () => {
  alert("BANA ULAŞAMAZSIN !");
});

// drag/drop

const txt = document.querySelectorAll(".text-content")[0];
const img = document.querySelectorAll(".img-content")[0];

let draggedItem = null;

const item = img;

item.addEventListener("dragstart", function () {
  draggedItem = item;
  setTimeout(function () {
    item.style.display = "none";
  }, 0);
});

item.addEventListener("dragend", function () {
  setTimeout(function () {
    draggedItem.style.display = "block";

    draggedItem = null;
  }, 0);
});

const list = txt;

list.addEventListener("dragover", function (e) {
  e.preventDefault();
});

list.addEventListener("dragenter", function (e) {
  e.preventDefault();
});

list.addEventListener("dragleave", function (e) {});

list.addEventListener("drop", function (e) {
  this.append(draggedItem);
});
