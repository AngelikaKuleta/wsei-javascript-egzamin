window.addEventListener("DOMContentLoaded", () => {
    let button1 = document.getElementById("button-1");
    let button2 = document.getElementById("button-2");
    let button3 = document.getElementById("button-3");
    let shoppingList = document.getElementById("shopping-list");

    button1.addEventListener("click", () => {
        let product = document.createElement("li");
        product.innerHTML = "Chleb";
        shoppingList.appendChild(product);
    });
    button2.addEventListener("click", () => {
        shoppingList.removeChild(shoppingList.lastChild);
    });

    button3.addEventListener("click", () => {
        if (shoppingList.children[1]) {
            let product = shoppingList.children[1].cloneNode(true);
            shoppingList.appendChild(product);
        }
    });
});