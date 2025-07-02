# Portfolio Desarrollo

Este proyecto es un portfolio web personal desarrollado con [Vue 3](https://vuejs.org/) y TypeScript. Permite mostrar información sobre tu experiencia, stack tecnológico, educación, proyectos y datos de contacto de manera profesional y moderna.

## Características

- SPA (Single Page Application) usando Vue Router.
- Componentes reutilizables para tarjetas de proyectos.
- Diseño responsive.
- Estructura modular para fácil mantenimiento y escalabilidad.

## Estructura del proyecto

- `src/views/Secciones/`: Vistas principales del portfolio (Sobre mí, Stack, Experiencia, Educación, Proyectos, Contacto).
- `src/widgets/cards/`: Componentes de tarjetas reutilizables.
- `src/router/router.ts`: Definición de rutas de la aplicación.
- `src/main.ts`: Punto de entrada de la aplicación.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JoseTruDiv/miportfolio.git
   cd portfolio-desarrollo
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abre tu navegador y visita `http://localhost:5173` para ver tu portfolio en acción.

## Construcción para producción

Para crear una versión optimizada para producción, ejecuta:
```bash
npm run build
```
Esto generará una carpeta `dist` con los archivos estáticos listos para ser desplegados en un servidor.

## Personalización

Siéntete libre de personalizar este template a tu gusto. Modifica los estilos, añade nuevas secciones o componentes, y ajusta la configuración según tus necesidades.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor abre un issue o envía un pull request con tus sugerencias.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

---

¡Gracias por usar este template! Esperamos que tu portfolio sea un gran éxito.
