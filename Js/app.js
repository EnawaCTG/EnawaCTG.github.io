const infouno = document.getElementById('dinfouno');

const cargarDinfo = () => {
    console.log('Funciona!')
}

const observador = new IntersectionObserver(cargarDinfo, {
    threshold: 0.1
});

observador.observe(infouno);