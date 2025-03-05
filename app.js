const imgContainer = document.getElementById("imageBox");
const img = imgContainer.querySelector("img");
const toggleText = document.getElementById("toggle-text");

imgContainer.addEventListener("click", function () {
    this.classList.toggle("expanded");
    img.classList.toggle("expanded");
    toggleText.textContent = this.classList.contains("expanded") ? "Clique para recolher" : "Clique aqui";
});


const scrollTopButton = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    scrollTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
});
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


function openWhatsApp() {
    let phoneNumber = "5519984397904"; 
    let message = "Olá, gostaria de mais informações!";
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}