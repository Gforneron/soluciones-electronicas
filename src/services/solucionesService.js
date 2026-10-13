// Por ahora los datos viven en memoria.
// Cuando agregues una base de datos, solo cambiás este archivo.
const soluciones = [
  {
    id: 'reparacion-placas',
    titulo: 'Reparación de placas electrónicas',
    categoria: 'Reparación',
    resumen: 'Diagnóstico y reparación de placas de control, fuentes y electrónica de potencia.',
    descripcion:
      'Relevamos la falla con instrumental de medición, reemplazamos componentes dañados y verificamos el funcionamiento bajo carga antes de la entrega.',
    incluye: ['Diagnóstico con multímetro y osciloscopio', 'Reemplazo de componentes SMD y THT', 'Prueba bajo carga'],
  },
  {
    id: 'diseno-pcb',
    titulo: 'Diseño de PCB',
    categoria: 'Diseño',
    resumen: 'Esquemáticos y circuitos impresos listos para fabricar.',
    descripcion:
      'Diseñamos tu circuito desde el esquema hasta los archivos Gerber, cuidando el ruteo, la disipación y las normas de fabricación.',
    incluye: ['Esquemático', 'Layout de 1 a 4 capas', 'Archivos Gerber y lista de materiales (BOM)'],
  },
  {
    id: 'automatizacion',
    titulo: 'Automatización con microcontroladores',
    categoria: 'Automatización',
    resumen: 'Sistemas con Arduino, ESP32 y STM32 para controlar y monitorear procesos.',
    descripcion:
      'Desarrollamos firmware y hardware para automatizar tareas: sensores, actuadores, comunicación inalámbrica y paneles de control.',
    incluye: ['Selección de microcontrolador', 'Firmware', 'Integración con sensores y relés'],
  },
  {
    id: 'iot',
    titulo: 'Proyectos IoT',
    categoria: 'IoT',
    resumen: 'Dispositivos conectados que envían datos a la nube.',
    descripcion:
      'Conectamos tus equipos a internet con WiFi, LoRa o GSM para que puedas monitorearlos y controlarlos a distancia.',
    incluye: ['Nodos con sensores', 'Protocolo MQTT / HTTP', 'Panel web de visualización'],
  },
  {
    id: 'mantenimiento',
    titulo: 'Mantenimiento preventivo',
    categoria: 'Mantenimiento',
    resumen: 'Revisión periódica de equipos para evitar paradas inesperadas.',
    descripcion:
      'Planes de inspección, limpieza y calibración para equipos industriales y de laboratorio.',
    incluye: ['Plan de revisión periódica', 'Calibración', 'Informe técnico'],
  },
];

const obtenerTodas = () => soluciones;

const obtenerPorId = (id) => soluciones.find((s) => s.id === id);

const obtenerDestacadas = (cantidad = 3) => soluciones.slice(0, cantidad);

module.exports = { obtenerTodas, obtenerPorId, obtenerDestacadas };
