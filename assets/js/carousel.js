document.addEventListener("DOMContentLoaded", function () {
    let carousel = new bootstrap.Carousel(document.querySelector("#carouselExampleCaptions"), {
        interval: 5000, // Passa o slide a cada 5 segundos
        ride: "carousel"
    });

    function adjustCarouselHeight() {
        let activeItem = document.querySelector(".carousel-item.active img");
        let carouselElement = document.querySelector("#carouselExampleCaptions");

        if (activeItem && carouselElement) {
            carouselElement.style.height = activeItem.clientHeight + "px";
        }
    }

    // Ajusta a altura inicialmente
    adjustCarouselHeight();

    // Ajusta quando o carrossel troca de slide
    document.querySelector("#carouselExampleCaptions").addEventListener("slid.bs.carousel", function () {
        adjustCarouselHeight();
    });

    // Ajusta ao redimensionar a janela
    window.addEventListener("resize", adjustCarouselHeight);
});