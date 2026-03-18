const fotos = document.querySelectorAll(".gal img");

fotos.forEach(foto => {

    foto.addEventListener("mousemove", e => {

        let x = (window.innerWidth / 2 - e.pageX) / 40;
        let y = (window.innerHeight / 2 - e.pageY) / 40;

        foto.style.transform = `rotateX(${y}deg) rotateY(${x}deg) scale(1.05)`;

    });

    foto.addEventListener("mouseleave", () => {

        foto.style.transform = "rotateX(0) rotateY(0) scale(1)";

    });

});