# Soluciones Electrónicas

Sitio base con Node.js + Express + EJS usando arquitectura MVC.

## Arrancar

```bash
npm install
npm run dev     # con recarga automática (Node 18.11+)
# o
npm start
```

Abrir http://localhost:3000

## Estructura

```
src/
├── app.js           # configuración de Express
├── controllers/     # lógica de cada ruta (C)
├── routers/         # definición de rutas
├── services/        # datos y lógica de negocio (M)
├── utils/           # logger, validadores
└── views/           # plantillas EJS (V)
    └── partials/    # head, header, footer, tarjetas
public/              # css, js e imágenes estáticas
```

## Flujo

`routers` → `controllers` → `services` (datos) → `views` (EJS)

## Próximos pasos sugeridos

- Reemplazar los datos en `services/solucionesService.js` por una base de datos (MongoDB, MySQL, SQLite).
- Enviar el formulario de contacto por email con `nodemailer`.
- Agregar imágenes en `public/img/`.

## Contenido editable

| Qué | Dónde |
|---|---|
| Soluciones | `src/services/solucionesService.js` |
| Proyectos del carrusel | `src/services/proyectosService.js` + imágenes en `public/img/proyectos/` |
| Equipo (página Nosotros) | `src/services/equipoService.js` + fotos en `public/img/equipo/` |
