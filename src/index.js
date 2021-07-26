let myList = document.getElementsByTagName("li");
for (let i = 0; i < myList.length; i++) {
  let btn = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  btn.className = "close";
  btn.appendChild(txt);
  myList[i].appendChild(btn);
}

let closeBtn = document.getElementsByClassName("close");
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

let list = document.getElementById("myUl");
list.addEventListener("click", function (ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
});

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function addTodo() {
  let inputValue = document.getElementById("myInput").value;
  if (inputValue === "") {
    alert(" Please write your task");
  } else {
    let li = document.createElement("li");
    let task = document.createTextNode(inputValue);
    li.appendChild(task);
    let btn = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    btn.className = "close";
    btn.appendChild(txt);
    li.appendChild(btn);
    document.getElementById("myInput").value = "";
    document.getElementById("myUl").appendChild(li);
    btn.onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
});
