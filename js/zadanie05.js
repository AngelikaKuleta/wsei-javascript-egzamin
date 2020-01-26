buttons = document.getElementsByTagName("button");
container = document.getElementById("container");

for(el of buttons) {
    el.addEventListener("click", function() {
        container.innerHTML = this.getAttribute("data-text");
    })
}