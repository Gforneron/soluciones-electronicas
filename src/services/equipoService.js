// Integrantes del equipo. Reemplazá estos datos por los reales.
// Para usar fotos propias: guardalas en public/img/equipo/ y cambiá la ruta en "foto".
const equipo = [
  {
    nombre: 'Nombre Apellido',
    rol: 'Ingeniero electrónico',
    descripcion: 'Breve descripción de la formación y experiencia de esta persona.',
    foto: '/img/equipo/persona-1.svg',
  },
  {
    nombre: 'Nombre Apellido',
    rol: 'Técnico en reparaciones',
    descripcion: 'Breve descripción de la formación y experiencia de esta persona.',
    foto: '/img/equipo/persona-2.svg',
  },
  {
    nombre: 'Nombre Apellido',
    rol: 'Desarrollador de firmware',
    descripcion: 'Breve descripción de la formación y experiencia de esta persona.',
    foto: '/img/equipo/persona-3.svg',
  },
];

const obtenerEquipo = () => equipo;

module.exports = { obtenerEquipo };
