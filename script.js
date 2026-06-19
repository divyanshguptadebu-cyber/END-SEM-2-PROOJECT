// Back To Top Button

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Product Buttons

const buttons = document.querySelectorAll(".box button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product page will be added in future updates!");
    });
});

// Welcome Message

window.onload = function () {
    console.log("Amazon Clone Loaded Successfully");
};