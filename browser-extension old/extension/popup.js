var lastFormat = localStorage.getItem("lastFormat");
if (lastFormat) {
    document.querySelector("#"+lastFormat).checked = true;
} else {
    document.querySelector("#mp3").checked = true;
}
function updateLastFormat() {
    var format = "";
    var inputs = document.querySelectorAll(".options input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            format = inputs[i].id;
        }
    }
    localStorage.setItem("lastFormat", format);
    return format;
}
document.addEventListener("click", function() {
    updateLastFormat();
});

var mp3 = document.querySelector("#mp3");
mp3.addEventListener("click", function() {
    init("mp3");
});
var aac = document.querySelector("#aac");
aac.addEventListener("click", function() {
    init("aac");
});
var mp4 = document.querySelector("#mp4");
mp4.addEventListener("click", function() {
    init("mp4");
});
function init(format) {
    chrome.runtime.sendMessage({
        "format": format
    });
    window.close();
}