function init(){
    let closebtn = document.getElementById("close-btn");
    closebtn.onclick = closepopup;
}
function closepopup(){
    document.getElementById("Modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded",init);