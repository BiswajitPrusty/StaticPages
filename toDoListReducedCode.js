var textBox = document.getElementById("textBox");
var button = document.getElementById("btn");
var list = document.querySelector("ul");
var msgTag = document.querySelector("h4")

function inputLength() {
    return textBox.value.length;
}

function addItems() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(textBox.value));
    list.appendChild(li);
    textBox.value = "";

    var del = document.createElement("button");
    del.appendChild(document.createTextNode("Delete!"));
    li.appendChild(del);
    del.onclick = removeParent;
    del.style.margin = "0px 0px 0px 20px"
}

function removeParent(event) {
    event.target.parentNode.remove();
}

function errorMsg() {
    var msg = document.createElement("mark")
    msg.appendChild(document.createTextNode("Enter your text and then click on add"))
    msgTag.appendChild(msg);
}

function addBtn() {
    if (inputLength() > 0) {
        addItems();
    }
    else {
        errorMsg();
    }

}

function keyBoard(event) {
    // console.log(event);
    if (inputLength() > 0 && event.keyCode === 13) {
        addItems();
    }
    else if (inputLength() === 0 && event.keyCode === 13) {
        errorMsg()
    }
}

button.addEventListener("click", addBtn);
textBox.addEventListener("keypress", keyBoard);