const menuLinks = document.querySelectorAll(".menu a");

function scrollToSection (event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute("href");
    const section = document.querySelector(id);
    console.log(section);
}


menuLinks.forEach((link) => {
    link.addEventListener("click" , scrollToSection);
});