import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Categoria from '../components/Categoria.vue';
import Login from '../components/Login.vue';
import store from '../store/index';
import Articulo from '../components/Articulo.vue';
import Usuario from '../components/Usuario.vue';


Vue.use(VueRouter);

const routes = [{
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            public: true

        }
    },
    {
        path: '/usuario',
        name: 'usuario',
        component: Usuario,
        meta: {
            auth: true
        }
    },
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            public: true

        }

    },
    {
        path: "/categoria",
        name: "categoria",
        component: Categoria,
        meta: {
            auth: true
        }

    },

    {
        path: "/articulo",
        name: "articulo",
        component: Articulo,
        meta: {
            auth: true
        }

    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.public)) {
        next();
    } else if (store.state.usuario) {
        if (to.matched.some(record => record.meta.auth)) {
            console.log(store.state.usuario);
            next();
        }
    } else {
        next({ name: 'login' });
    }
})

export default router;