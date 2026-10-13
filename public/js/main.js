// Carrusel de proyectos (sin librerías).
// Usa scroll-snap en CSS; el JS agrega botones, puntos y avance automático.
document.querySelectorAll('[data-carrusel]').forEach((carrusel) => {
  const pista = carrusel.querySelector('[data-pista]');
  const slides = Array.from(pista.children);
  const contenedorPuntos = carrusel.querySelector('[data-puntos]');
  const btnAnterior = carrusel.querySelector('[data-anterior]');
  const btnSiguiente = carrusel.querySelector('[data-siguiente]');
  const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let actual = 0;
  let timer = null;

  const puntos = slides.map((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'punto';
    b.setAttribute('aria-label', `Ir al proyecto ${i + 1}`);
    b.addEventListener('click', () => irA(i));
    contenedorPuntos.appendChild(b);
    return b;
  });

  function marcarActual() {
    puntos.forEach((p, i) => p.setAttribute('aria-current', i === actual ? 'true' : 'false'));
  }

  function irA(indice) {
    actual = (indice + slides.length) % slides.length;
    pista.scrollTo({
      left: slides[actual].offsetLeft - pista.offsetLeft,
      behavior: reducirMovimiento ? 'auto' : 'smooth',
    });
    marcarActual();
  }

  // Si la persona desliza con el dedo o el mouse, actualizamos el punto activo
  let esperando;
  pista.addEventListener('scroll', () => {
    clearTimeout(esperando);
    esperando = setTimeout(() => {
      actual = Math.round(pista.scrollLeft / slides[0].offsetWidth);
      marcarActual();
    }, 80);
  });

  btnAnterior.addEventListener('click', () => irA(actual - 1));
  btnSiguiente.addEventListener('click', () => irA(actual + 1));

  pista.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); irA(actual - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); irA(actual + 1); }
  });

  // Avance automático (se pausa al pasar el mouse o enfocar, y se omite si el sistema pide menos movimiento)
  function iniciar() {
    if (reducirMovimiento || slides.length < 2) return;
    detener();
    timer = setInterval(() => irA(actual + 1), 6000);
  }
  function detener() { clearInterval(timer); }

  carrusel.addEventListener('mouseenter', detener);
  carrusel.addEventListener('mouseleave', iniciar);
  carrusel.addEventListener('focusin', detener);
  carrusel.addEventListener('focusout', iniciar);

  marcarActual();
  iniciar();
});
