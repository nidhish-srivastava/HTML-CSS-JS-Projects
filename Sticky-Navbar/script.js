var navbar = document.querySelector(".navbar")
window.onscroll = () => {
    this.scrollY > 0 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
}