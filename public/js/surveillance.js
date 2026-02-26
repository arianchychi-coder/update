const onlineBox = document.getElementById("onlinebox");
const onlineText = document.getElementById("online");

onlineBox.addEventListener("click", function() {
    if (onlineText.innerHTML === "online") {
        onlineText.innerHTML = "offline";
        onlineText.style.color = "red";
        onlineText.style.fontWeight = "bold";
    } else {
        onlineText.innerHTML = "online";
        onlineText.style.color = "green";
        onlineText.style.fontWeight = "bold";
    }
});



