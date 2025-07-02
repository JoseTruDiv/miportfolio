import { createRouter, createWebHistory } from "vue-router";
import SobreMi from "../views/Secciones/SobreMi.vue";
import Stack from "../views/Secciones/MiStack.vue";
import Experiencia from "../views/Secciones/Experiencia.vue";
import Educacion from "../views/Secciones/Educacion.vue";
import Proyectos from "../views/Secciones/Proyectos.vue";
import Contacto from "../views/Secciones/Contacto.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: SobreMi,
    },
    {
        path: "/stack",
        name: "Stack",
        component: Stack,
    },
    {
        path: "/experiencia",
        name: "Experiencia",
        component: Experiencia
    },
    {
        path: "/educacion",
        name: "Educacion",
        component: Educacion
    },
    {
        path: "/proyectos",
        name: "Proyectos",
        component: Proyectos
    },
    {
        path: "/contacto",
        name: "Contactos",
        component: Contacto
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;