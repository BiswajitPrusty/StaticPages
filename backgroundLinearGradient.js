
var btn1 = document.querySelector(".color1");
var btn2 = document.querySelector(".color2");
var body = document.getElementById("bgBody");
var msg = document.querySelector("h3");

function colorChange(){
    console.log("hiii");
    body.style.background="linear-gradient(to right,"
                            +btn1.value
                            +","
                            +btn2.value
                            +")";
msg.textContent=body.style.background+"";
}

btn1.addEventListener("input",colorChange);

btn2.addEventListener("input",colorChange);