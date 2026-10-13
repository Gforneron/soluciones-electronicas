// Proyectos realizados. Reemplazá estos datos por los reales.
// Para usar fotos propias: guardalas en public/img/proyectos/ y cambiá la ruta en "imagen".
const proyectos = [
  {
    id: 1,
    titulo: 'Control de temperatura para cámara frigorífica',
    categoria: 'Automatización',
    descripcion: 'Sistema con sensores y alarma remota para mantener la cadena de frío de una pyme alimenticia.',
    imagen: '/img/proyectos/proyecto-1.svg',
  },
  {
    id: 2,
    titulo: 'Reparación de variadores de frecuencia',
    categoria: 'Reparación',
    descripcion: 'Recuperación de equipos industriales que estaban fuera de servicio, con ahorro frente a la compra nueva.',
    imagen: '/img/proyectos/proyecto-2.svg',
  },
  {
    id: 3,
    titulo: 'Monitoreo de consumo eléctrico',
    categoria: 'IoT',
    descripcion: 'Nodos conectados por WiFi que envían el consumo de cada línea a un panel web.',
    imagen: '/img/proyectos/proyecto-3.svg',
  },
  {
    id: 4,
    titulo: 'Placa de control a medida',
    categoria: 'Diseño',
    descripcion: 'Diseño de PCB de 2 capas con microcontrolador para un equipo de laboratorio.',
    imagen: '/img/proyectos/proyecto-4.svg',
  },
];

const obtenerTodos = () => proyectos;

module.exports = { obtenerTodos };
